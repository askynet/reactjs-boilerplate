import React, { type CSSProperties } from "react";

import {
  BarsOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Grid, Layout, Menu, theme } from "antd";
import { useThemedLayoutContext } from "../hooks/ThemeLayoutContext";
import { Title } from "./AppTitle";
import { AppMenu } from "./AppMenu";
import { Link } from "react-router-dom";
import { kebabCase } from "lodash";


const drawerButtonStyles: CSSProperties = {
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  position: "fixed",
  top: 64,
  zIndex: 1001,
};

const { SubMenu } = Menu;
const { useToken } = theme;

export type ITreeMenu = any & {
  key?: string;
  children: ITreeMenu[];
};

export type IMenuItem = any & {
  key: string;
  route: string;
};

export const pickNotDeprecated = <T extends unknown[]>(
  ...args: T
): T[never] => {
  return args.find((arg) => typeof arg !== "undefined");
};


export const AppSidebar: React.FC = () => {
  const { token } = useToken();
  const {
    siderCollapsed,
    setSiderCollapsed,
    mobileSiderOpen,
    setMobileSiderOpen,
    selectedKey
  } = useThemedLayoutContext();

  const breakpoint = Grid.useBreakpoint();

  const isMobile =
    typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

  const renderTreeView = (tree: ITreeMenu[], selectedKey?: string) => {
    return tree.map((item: ITreeMenu) => {
      const {
        icon,
        label,
        route,
        key,
        name,
        children,
        parentName,
        meta,
        options,
      } = item;

      if (children && children.length > 0) {
        return (
          <SubMenu
            key={item.key || kebabCase(item.label)}
            icon={icon ?? <UnorderedListOutlined />}
            title={label}
          >
            {renderTreeView(children, selectedKey)}
          </SubMenu>
        );
      }
      const isSelected = key === selectedKey;
      const isRoute = !(
        pickNotDeprecated(meta?.parent, options?.parent, parentName) !==
        undefined && children && children.length === 0
      );

      return (
        <Menu.Item
          key={item.key || kebabCase(item.label)}
          icon={icon}
        >
          <Link to={route ?? ""}>{label}</Link>
          {!siderCollapsed && isSelected && (
            <div className="ant-menu-tree-arrow" />
          )}
        </Menu.Item>
      );
    });
  };

  const items = renderTreeView(AppMenu, selectedKey);

  const renderSider = () => {
    return <>{items}</>;
  };

  const renderMenu = () => {
    return (
      <Menu
        selectedKeys={selectedKey ? [selectedKey] : []}
        // defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        style={{
          paddingTop: "8px",
          border: "none",
          overflow: "auto",
          height: "calc(100% - 72px)",
          background: "transparent",
        }}
        onClick={() => {
          setMobileSiderOpen(false);
        }}
      >
        {renderSider()}
      </Menu>
    );
  };

  const renderDrawerSider = () => {
    return (
      <>
        <Drawer
          open={mobileSiderOpen}
          onClose={() => setMobileSiderOpen(false)}
          placement="left"
          closable={false}
          width={256}
          bodyStyle={{
            padding: 0,
          }}
          maskClosable={true}
        >
          <Layout>
            <Layout.Sider
              width={256}
              style={{
                height: "100vh",
                backgroundColor: token.colorBgContainer,
                borderRight: `1px solid ${token.colorBorderBg}`,
              }}
            >
              <div
                style={{
                  width: "256px",
                  padding: "0 16px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "54px",
                  backgroundColor: token.colorBgElevated,
                  borderBottom: "none",
                }}
              >
                <Title collapsed={false} />
              </div>
              {renderMenu()}
            </Layout.Sider>
          </Layout>
        </Drawer>
        {/* <Button
          style={drawerButtonStyles}
          size="large"
          onClick={() => setMobileSiderOpen(true)}
          icon={<BarsOutlined />}
        /> */}
      </>
    );
  };

  if (isMobile) {
    return renderDrawerSider();
  }

  const siderStyles: React.CSSProperties = {
    backgroundColor: token.colorBgContainer,
    borderRight: `1px solid ${token.colorBorderBg}`,
    position: "sticky",
    top: 0,
    left: 0,
    height: "100vh",
    zIndex: 999,
  };

  return (<>
    <Layout.Sider
      style={siderStyles}
      width={256}
      collapsible
      collapsed={siderCollapsed}
      onCollapse={(collapsed, type) => {
        if (type === "clickTrigger") {
          setSiderCollapsed(collapsed);
        }
      }}
      collapsedWidth={80}
      breakpoint="lg"
      trigger={
        <Button
          type="text"
          style={{
            borderRadius: 0,
            height: "100%",
            width: "100%",
            backgroundColor: token.colorBgElevated,
            borderRight: `1px solid ${token.colorBorderBg}`,
          }}
        >
          {siderCollapsed ? (
            (<DoubleRightOutlined
              style={{
                color: token.colorPrimary,
              }}
            />)
          ) : (
            (<DoubleLeftOutlined
              style={{
                color: token.colorPrimary,
              }}
            />)
          )}
        </Button>
      }
    >
      <div
        style={{
          width: siderCollapsed ? "80px" : "256px",
          padding: siderCollapsed ? "0" : "0 16px",
          display: "flex",
          justifyContent: siderCollapsed ? "center" : "flex-start",
          alignItems: "center",
          height: "54px",
          backgroundColor: token.colorBgElevated,
          fontSize: "14px",
        }}
      >
        <Title collapsed={siderCollapsed} />
      </div>
      {renderMenu()}
    </Layout.Sider>
  </>);
};

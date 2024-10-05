import React, { CSSProperties } from "react";

import { Button, Grid, Layout, Space, theme } from "antd";
import {
    BarsOutlined,
} from "@ant-design/icons";

import { AppUser } from "./AppUser";
import { Notifications } from "../components/Notification";
import { useThemedLayoutContext } from "../hooks/ThemeLayoutContext";
import { Logo } from "../components/Logo";
import { Title } from "./AppTitle";

const { useToken } = theme;

const drawerButtonStyles: CSSProperties = {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    // position: "fixed",
    // top: 64,
    // zIndex: 1001,
};


export const AppHeader: React.FC = () => {
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

    const headerStyles: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 24px",
        height: "54px",
        position: "sticky",
        top: 0,
        zIndex: 999,
    };

    return (
        <Layout.Header style={headerStyles}>
            {
                isMobile ?
                    <Space align="center" size="middle">
                        <Button
                            size="large"
                            color="default"
                            variant="text"
                            onClick={() => setMobileSiderOpen(true)}
                            icon={<BarsOutlined />}
                        />
                        <div style={{ display: 'flex' }}>
                            <Title />
                        </div>
                    </Space> : <div></div>
            }
            <Space align="center" size="middle">
                <Notifications />
                <AppUser />
            </Space>
        </Layout.Header>
    );
};

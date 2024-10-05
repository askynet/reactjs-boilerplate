import React from "react";

import { Button, Layout, Space, theme } from "antd";
import { AppUser } from "./AppUser";
import { Notifications } from "../components/Notification";
import { useNavigate } from "react-router-dom";
import { Title } from "./AppTitle";

const { useToken } = theme;

export const Navbar: React.FC = () => {
    const { token } = useToken();
    const navigation = useNavigate()

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

    const goToLogin = () => {
        navigation('/login')
    }

    return (
        <Layout.Header style={headerStyles}>
            <Title />
            <Space align="center" size="middle">
                <Button type="primary" onClick={goToLogin}>Login</Button>
            </Space>
        </Layout.Header>
    );
};

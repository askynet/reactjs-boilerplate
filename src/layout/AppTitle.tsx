import React from "react";

import { Anchor, Space, theme, Typography } from "antd";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

const { useToken } = theme;

const name = "Globex Corporation";

export const Title: React.FC<any> = ({
    collapsed,
    wrapperStyles,
}) => {
    const { token } = useToken();

    return (
        <Link
            to="/"
            style={{
                display: "inline-block",
                textDecoration: "none",
            }}
        >
            <Space
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "inherit",
                    ...wrapperStyles,
                }}
            >
                <div
                    style={{
                        height: "24px",
                        width: "24px",
                        color: token.colorPrimary,
                        display: 'flex'
                    }}
                >
                    <Logo />
                </div>

                {!collapsed && (
                    <Typography.Title
                        style={{
                            fontSize: "inherit",
                            margin: 0,
                            fontWeight: 700,

                        }}
                    >
                        {name}
                    </Typography.Title>
                )}
            </Space>
        </Link>
    );
};

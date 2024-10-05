import { useState } from "react";

import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { Text } from "../components/Text";
import { CustomAvatar } from "../components/CustomAvatar";
import { CustomModal } from "../components/CustomModal";
import { useNavigate } from "react-router-dom";

export const AppUser: React.FC = () => {
    const navigation = useNavigate()
    const [opened, setOpened] = useState(false);
    const user = {
        id: 1,
        name: 'Akash Ahire',
        avatarUrl: null
    }

    const logoutClick = () => {
        localStorage.clear();
        navigation('/')
    }

    const content = (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Text
                strong
                style={{
                    padding: "12px 20px",
                }}
            >
                {user?.name}
            </Text>
            <div
                style={{
                    borderTop: "1px solid #d9d9d9",
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                }}
            >
                <Button
                    style={{ textAlign: "left" }}
                    icon={<SettingOutlined />}
                    type="text"
                    block
                    onClick={() => setOpened(true)}
                >
                    Account settings
                </Button>
                <Button
                    style={{ textAlign: "left" }}
                    icon={<LogoutOutlined />}
                    type="text"
                    danger
                    block
                    onClick={logoutClick}
                >
                    Logout
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <Popover
                placement="bottomRight"
                content={content}
                trigger="click"
                overlayInnerStyle={{ padding: 0 }}
                overlayStyle={{ zIndex: 999 }}
            >
                <CustomAvatar
                    name={user?.name}
                    src={user?.avatarUrl}
                    size="default"
                    style={{ cursor: "pointer" }}
                />
            </Popover>
            {user && (
                <CustomModal
                    opened={opened}
                    setOpened={setOpened}
                    userId={user.id}
                />
            )}
        </>
    );
};

import { useState } from "react";
import styles from "../styles/custom-modal.module.css";
import {
    CloseOutlined,
    EditOutlined,
    GlobalOutlined,
    IdcardOutlined,
    MailOutlined,
    PhoneOutlined,
    SafetyCertificateOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {
    Button,
    Card,
    Drawer,
    Input,
    Select,
    Space,
    Spin,
    Typography,
} from "antd";
import { Text } from "./Text";
import { CustomAvatar } from "./CustomAvatar";

type Props = {
    opened: boolean;
    setOpened: (opened: boolean) => void;
    userId: any;
};

type FormKeys = "email" | "jobTitle" | "phone" | "timezone";

export const CustomModal = ({ opened, setOpened, userId }: Props) => {
    const [activeForm, setActiveForm] = useState<FormKeys>();
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const data: any = {
        data: {
            id: 1,
            name: 'Akash Aire',
            email: 'ak@ak.com',
            jobTitle: 'Developer',
            phone: '987654321',
            profile: ''
        }
    };

    const closeModal = () => {
        setOpened(false);
    };

    if (isError) {
        closeModal();
        return null;
    }

    if (isLoading) {
        return (
            <Drawer
                open={opened}
                width={756}
                bodyStyle={{
                    background: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Spin />
            </Drawer>
        );
    }

    const { id, name, email, jobTitle, phone, profile } =
        data?.data ?? {};

    const getActiveForm = (key: FormKeys) => {
        if (activeForm === key) {
            return "form";
        }

        if (!data?.data[key]) {
            return "empty";
        }

        return "view";
    };

    return (
        <Drawer
            onClose={closeModal}
            open={opened}
            width={756}
            styles={{
                body: { background: "#f5f5f5", padding: 0 },
                header: { display: "none" },
            }}
        >
            <div className={styles.header}>
                <Text strong>Account Settings</Text>
                <Button
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={() => closeModal()}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.name}>
                    <CustomAvatar
                        style={{
                            marginRight: "1rem",
                            flexShrink: 0,
                            fontSize: "40px",
                        }}
                        size={96}
                        src={profile}
                        name={name}
                    />
                    <Typography.Title
                        level={3}
                        style={{ padding: 0, margin: 0, width: "100%" }}
                        className={styles.title}
                        editable={{
                            onChange(value) {

                            },
                            triggerType: ["text", "icon"],
                            icon: <EditOutlined className={styles.titleEditIcon} />,
                        }}
                    >
                        {name}
                    </Typography.Title>
                </div>
                <Card
                    title={
                        <Space size={15}>
                            <UserOutlined />
                            <Text size="sm">User profile</Text>
                        </Space>
                    }
                    headStyle={{ padding: "0 12px" }}
                    bodyStyle={{ padding: "0" }}
                >

                </Card>
                <Card
                    title={
                        <Space size={15}>
                            <SafetyCertificateOutlined />
                            <Text size="sm">Security</Text>
                        </Space>
                    }
                    headStyle={{ padding: "0 12px" }}
                    bodyStyle={{ padding: "0" }}
                >
                    {/* <SingleElementForm
                        useFormProps={{
                            id,
                            resource: "users",
                            meta: {
                                gqlMutation: ACCOUNT_SETTINGS_UPDATE_USER_MUTATION,
                            },
                        }}
                        formProps={{ initialValues: { email } }}
                        // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
                        icon={<MailOutlined className="tertiary" />}
                        state={getActiveForm("email")}
                        itemProps={{
                            name: "email",
                            label: "Email",
                        }}
                        view={<Text>{email}</Text>}
                        onClick={() => setActiveForm("email")}
                        onUpdate={() => setActiveForm(undefined)}
                        onCancel={() => setActiveForm(undefined)}
                    >
                        <Input />
                    </SingleElementForm> */}
                </Card>
            </div>
        </Drawer>
    );
};

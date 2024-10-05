import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import '../styles/login.css';
import { useNavigate } from "react-router-dom";
import { Title } from "../layout/AppTitle";

const Login: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const onFinish = (values: any) => {
        localStorage.setItem('authToken', 'akash')
        navigate('/dashboard')
    };

    return (
        <>
            <div className="login-container" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 20 }}>
                    <Title />
                </div>
                <Form
                    name="login-form"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Button type="primary" className="login-form-button" onClick={onFinish}>
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Login;

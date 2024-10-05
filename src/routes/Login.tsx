import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import '../styles/login.css';
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        messageApi.open({
            type: 'success',
            content: 'Logged in!',
        });
        localStorage.setItem('authToken', 'akash')
        navigate('/dashboard')
    };

    return (
        <div className="login-container">
            {contextHolder}
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
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={onFinish}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;

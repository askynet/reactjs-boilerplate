import { Card, theme } from 'antd';
import React from 'react';
import { Navbar } from '../layout/Navbar';

const InfoCard: React.FC<{
    title: string;
    index: number;
    desc: string;
    href: string;
}> = ({ title, href, index, desc }) => {
    const { useToken } = theme;

    const { token } = useToken();

    return (
        <div
            style={{
                backgroundColor: token.colorBgContainer,
                boxShadow: token.boxShadow,
                borderRadius: '8px',
                fontSize: '14px',
                color: token.colorTextSecondary,
                lineHeight: '22px',
                padding: '16px 19px',
                minWidth: '220px',
                flex: 1,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: 48,
                        height: 48,
                        lineHeight: '22px',
                        backgroundSize: '100%',
                        textAlign: 'center',
                        padding: '8px 16px 16px 12px',
                        color: '#FFF',
                        fontWeight: 'bold',
                        backgroundImage:
                            "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
                    }}
                >
                    {index}
                </div>
                <div
                    style={{
                        fontSize: '16px',
                        color: token.colorText,
                        paddingBottom: 8,
                    }}
                >
                    {title}
                </div>
            </div>
            <div
                style={{
                    fontSize: '14px',
                    color: token.colorTextSecondary,
                    textAlign: 'justify',
                    lineHeight: '22px',
                    marginBottom: 8,
                }}
            >
                {desc}
            </div>
            <a href={href} target="_blank" rel="noreferrer">
                了解更多 {'>'}
            </a>
        </div>
    );
};

const Welcome: React.FC = () => {
    const { token } = theme.useToken();
    return (
        <div>
            <Navbar />
            <Card
                style={{
                    borderRadius: 8,
                }}
                styles={{
                    body: {
                        backgroundImage:
                            1
                                ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
                                : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
                    },
                }}
            >
                <div
                    style={{
                        backgroundPosition: '100% -30%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '274px auto',
                        backgroundImage:
                            "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
                    }}
                >
                    <div
                        style={{
                            fontSize: '20px',
                            color: token.colorTextHeading,
                        }}
                    >
                        ReactJS Ant Design
                    </div>
                    <p
                        style={{
                            fontSize: '14px',
                            color: token.colorTextSecondary,
                            lineHeight: '22px',
                            marginTop: 16,
                            marginBottom: 32,
                            width: '65%',
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Welcome;

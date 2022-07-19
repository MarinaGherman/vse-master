import React from 'react';
import Header from '../../components/common/Header'
import grid from '../../styles/grid.scss';
import {Row, Col, Form, Input, Checkbox, Button} from "antd";
import styles from '../styles/login.scss'
import {useTranslation} from "react-i18next";

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = () => {
    const {t} = useTranslation();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className={grid.container}>
                <Header/>
            </div>
            <div className={grid.container}>
                <div className={styles.loginContainer}>
                    <Row justify="center">
                        <Col span={12}>
                            <h1 dangerouslySetInnerHTML={{__html: t('login.log')}}/>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Пожалуйста, введите E-mail' }]}
                                >
                                    <Input placeholder="E-mail"
                                           className={styles.input}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
                                >
                                    <Input.Password
                                        placeholder="******"
                                        className={styles.input}
                                    />
                                </Form.Item>


                                <Form.Item {...tailLayout}>
                                    <Button type="primary"
                                            htmlType="submit"
                                            className={styles.btn}
                                    >
                                        <span>{t('login.logIn')}</span>
                                    </Button>
                                </Form.Item>
                            </Form>
                            <Row>
                                <Col span={24} offset={9}>
                                    <Row>
                                        <Col span={2}>
                                            <img src="/images/icons/vk-login.svg" alt=""/>
                                        </Col>
                                        <Col span={2}>
                                            <img src="/images/icons/fb-login.svg" alt=""/>
                                        </Col>
                                        <Col span={2}>
                                            <img src="/images/icons/google-login.svg" alt=""/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <div className={styles.registration}>
                        <Row justify="center"  >
                            <Col span={6} >
                                <div className={styles.div}>
                                    <span className={styles.reg}>{t('login.registration')}</span>
                                </div>

                            </Col>
                            <Col span={6}>
                                <span  className={styles.reg}> {t('login.password')}</span>
                            </Col>
                        </Row>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Login;
import React from 'react';
import { useTranslation } from 'react-i18next';
import {Row, Col, Input} from "antd";
import Link from 'next/link'
import {ArrowRightOutlined} from '@ant-design/icons';
import styles from './Footer.module.scss';


const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <Row >
                <Col xl={5} xs={18} >
                    <Link href="/">
                        <a>
                            <h1 className={styles.logo}>VSE</h1>
                        </a>
                    </Link>
                </Col>
                <Col xs={6} classNmae={styles.socialMob}>
                    <Row gutter={6} >
                        <Col span={8}>
                            <img src="/images/footer/insta.png" alt=""/>
                        </Col>
                        <Col span={8}>
                            <img src="/images/footer/fb.png" alt=""/>
                        </Col>
                        <Col span={8}>
                            <img src="/images/footer/twitter.png" alt=""/>
                        </Col>
                    </Row>
                </Col>
                <Col xl={5} xs={24}>
                    <h2>{t('footer.menu1')}</h2>
                    <p>{t('footer.about')}</p>
                    <p>{t('footer.serials')}</p>
                </Col>
                <Col xl={5} xs={24}>
                    <h2>{t('footer.menu2')}</h2>
                    <p>{t('footer.cooperation')}</p>
                    <p>{t('footer.vacancy')}</p>
                </Col>
                <Col xl={6}  sx={24}  >
                    <h2>{t('footer.menu3')}</h2>
                    <p>{t('footer.subscribe')}</p>
                    <div className={styles.inputBlock}>
                        <Input className={styles.input}/>
                        <button>
                            <ArrowRightOutlined />
                        </button>
                    </div>
                    <h3>{t('footer.aboutSubscribe')}</h3>
                </Col>
            </Row>

            <Row className={styles.socialLogo}>
                <Col span={5}>
                    <Row gutter={3} >
                        <Col span={4}>
                            <img src="/images/footer/insta.png" alt=""/>
                        </Col>
                        <Col span={3}>
                            <img src="/images/footer/fb.png" alt=""/>
                        </Col>
                        <Col span={3}>
                            <img src="/images/footer/twitter.png" alt=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span={5}>
                    <p className={styles.contacts}>{t('footer.contacts')}</p>
                </Col>
            </Row>
            <Row>
                <Col xl={8} xs={24}>
                <h4>{t('footer.comment')} </h4>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;

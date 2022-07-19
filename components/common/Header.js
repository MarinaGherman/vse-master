import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss'
import { Row, Col, Affix} from 'antd';

const Header = ({links}) => {
    return (
        <Affix offsetTop={0} className={styles.affix}>
            <Row className={styles.header}>
                <Col span={4}>
                        <Link href="/">
                            <a>
                                <p className={styles.logo}>VSE</p>
                            </a>
                        </Link>
                </Col>
                <Col span={16} className={styles.links}>
                    {links && links.map((link, i) => (
                            <Link href={link.url} key={i}>
                                <a>{link.text}</a>
                            </Link>
                    ))}
                </Col>
                <Col span={4} className={styles.userIcon}>
                    <Link href="/profile/1">
                        <a>
                            <div className={styles.orangeBlock}>
                                <img src="/images/header/userIcon.png" alt=""/>
                            </div>
                        </a>
                    </Link>
                </Col>
            </Row>
        </Affix>
    );
};

export default Header;

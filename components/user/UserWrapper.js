import React from 'react';
import {useTranslation} from "react-i18next";
import grid from "../../styles/grid.scss";
import Link from 'next/link'
import {Footer, Header} from "../common";
import styles from "./UserWrapper.scss"
import {LeftOutlined, PlusOutlined, RightOutlined} from "@ant-design/icons";
import {Col, Row} from "antd";

const UserWrapper = ({children, user}) => {
    const {t} = useTranslation();
    return (
        <div>
            <div className={grid.container}>
                <Header
                    links={[
                        {
                            'url': `/profile/${user}/wish`,
                            'text': 'Посмотреть позже'
                        },
                        {
                            'url': '/',
                            'text': 'История поиска'
                        },
                        {
                            'url': '/',
                            'text': 'Понравившееся'
                        },

                    ]}
                />
            </div>

            <div className={styles.user}>
                <div className={grid.container}>
                    <div className={styles.backToSearch}>
                        <p> <LeftOutlined /> {t('profile.backSearch')}</p>
                    </div>
                    <div className={styles.userContainer}>
                        <Row gutter={16}>
                            <Col span={4} >
                                <Link  href="/profile/1">
                                    <a>
                                        <div className={`${styles.menu} ${styles.active}`}>
                                            <p >{t('profile.profile')}</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/profile/1/wish">
                                    <a>
                                        <div className={`${styles.menu}`}>
                                            <p >{t('profile.toSee')}</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/profile/1/seen">
                                    <a>
                                        <div className={`${styles.menu}`}>
                                            <p >{t('profile.seen')}</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/profile/1/reviews">
                                    <a>
                                        <div className={`${styles.menu}`}>
                                            <p >{t('profile.reviews')}</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/profile/1/settings">
                                    <a>
                                        <div className={`${styles.menu}`}>
                                            <p >{t('profile.settings')}</p>
                                        </div>
                                    </a>
                                </Link>
                                <div className={styles.signOut}>
                                    <p>{t('profile.signOut')}</p>
                                </div>
                            </Col>
                            <Col span={15}>
                                {children}
                            </Col>
                            <Col span={5}>
                                <div className={styles.userProfile}>
                                    <Row>
                                        <Col span={24}>
                                            <Link  href="/profile/1/settings">
                                                <a>
                                                    <div className={styles.profileImg}/>
                                                </a>
                                            </Link>
                                            <div className={styles.userName}>
                                                <h3>Иван Костров</h3>
                                                <img src="/images/common/medal.svg" alt=""/>
                                                <span>{t('series.medal')}</span>
                                            </div>
                                            <div>
                                                <Row >
                                                    <Col span={20}>
                                                        <h3 className={styles.newSeries}>{t('profile.newSeries')}</h3>
                                                    </Col>
                                                    <Col span={4}>
                                                        <PlusOutlined className={styles.newSeriesIcon}/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={24}>
                                                        <span className={styles.remindMe}>{t('profile.remindMe')}</span>
                                                    </Col>
                                                </Row>

                                                <div className={styles.remindCard}>
                                                    <Row>
                                                        <Col span={10} className={styles.remindCardImg}>
                                                            <Link href="/series/1">
                                                                <a>
                                                                    <img  src="/images/cards/1.png" alt=""/>
                                                                </a>
                                                            </Link>
                                                        </Col>
                                                        <Col span={14} className={styles.remindCardTitle}>
                                                            <h4>Ход королевы</h4>
                                                            <Row>
                                                                <Col span={5}>
                                                                    <p className={styles.date}>03.03</p>
                                                                </Col>
                                                                <Col span={19}>
                                                                    <p className={styles.serie}>1 серия 2 сезон</p>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className={styles.remindCard}>
                                                    <Row>
                                                        <Col span={10} className={styles.remindCardImg}>
                                                            <Link href="/series/1">
                                                                <a>
                                                                    <img  src="/images/cards/5.png" alt=""/>
                                                                </a>
                                                            </Link>

                                                        </Col>
                                                        <Col span={14} className={styles.remindCardTitle}>
                                                            <h4>Острые козырьки</h4>
                                                            <Row>
                                                                <Col span={5}>
                                                                    <p className={styles.date}>03.03</p>
                                                                </Col>
                                                                <Col span={19}>
                                                                    <p className={styles.serie}>13 серия 2 сезон</p>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className={styles.remindCard}>
                                                    <Row>
                                                        <Col span={10} className={styles.remindCardImg}>
                                                            <img  src="/images/cards/6.png" alt=""/>
                                                        </Col>
                                                        <Col span={14} className={styles.remindCardTitle}>
                                                            <h4>Игра пристолов</h4>
                                                            <Row>
                                                                <Col span={5}>
                                                                    <p className={styles.date}>12.03</p>
                                                                </Col>
                                                                <Col span={19}>
                                                                    <p className={styles.serie}>1 серия 2 сезон</p>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className={styles.notifications}>
                                                    <Row justify="left">
                                                        <Col span={13}>
                                                            <Link href="/profile/1/reviews">
                                                                <a>
                                                                    <h3>{t('profile.notifications')}</h3>
                                                                </a>
                                                            </Link>
                                                        </Col>
                                                        <Col span={2}>
                                                            <span className={styles.notificationCount}>+2</span>
                                                        </Col>
                                                    </Row>
                                                    <div className={styles.notificationsBlock}>
                                                        <h4>{t('profile.comment')}</h4>
                                                        <div className={styles.myComment}>
                                                            <p>На вашу рецензию “Ход королевы"</p>
                                                            <RightOutlined className={styles.notificationsIcon} />
                                                        </div>
                                                        <div className={styles.activeDot} />
                                                    </div>
                                                    <div className={styles.openNew}>
                                                        <Link href="/profile/1/reviews">
                                                            <a>
                                                                <p>{t('profile.openNew')}</p>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={grid.container}>
                    <Footer/>
                </div>
            </div>

        </div>

    );
};

export default UserWrapper;
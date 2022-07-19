import React, {useState} from 'react';
import {Row, Col} from "antd";
import {useTranslation} from 'react-i18next';
import UserWrapper from "../../../components/user/UserWrapper";
import {
    DislikeOutlined,
    LikeOutlined,
    DislikeFilled,
    LikeFilled
} from '@ant-design/icons';
import styles from "../../styles/seen.scss"


const Seen = ({user}) => {

    const [seenFilms] = useState([
        {
            "url": "/images/cards/1.png"
        },
        {
            "url": "/images/cards/2.png"
        },
        {
            "url": "/images/cards/3.png"
        },
        {
            "url": "/images/cards/4.png"
        },
        {
            "url": "/images/cards/5.png"
        },
        {
            "url": "/images/cards/1.png"
        },
        {
            "url": "/images/cards/2.png"
        },
        {
            "url": "/images/cards/3.png"
        },
        {
            "url": "/images/cards/4.png"
        },
        {
            "url": "/images/cards/5.png"
        },
        {
            "url": "/images/cards/6.png"
        },
        {
            "url": "/images/cards/1.png"
        },
        {
            "url": "/images/cards/2.png"
        },
        {
            "url": "/images/cards/1.png"
        },
        {
            "url": "/images/cards/2.png"
        },
        {
            "url": "/images/cards/3.png"
        },
        {
            "url": "/images/cards/4.png"
        },
        {
            "url": "/images/cards/5.png"
        },
        {
            "url": "/images/cards/1.png"
        },
        {
            "url": "/images/cards/2.png"
        },
        {
            "url": "/images/cards/3.png"
        },
        {
            "url": "/images/cards/4.png"
        },
        {
            "url": "/images/cards/5.png"
        },
        {
            "url": "/images/cards/6.png"
        },
        {
            "url": "/images/cards/1.png"
        },
        {
            "url": "/images/cards/2.png"
        }
    ]);

    const {t} = useTranslation();
    return (
        <div>
            <UserWrapper user={user}>
                <div className={styles.container}>
                    <Row>
                        <Col span={24} className={styles.seenContainer}>
                            <h1>{t('seen.title')}</h1>
                            <span> {t('seen.seenList')}</span>
                            <span className={styles.seenList}>12 сериалов</span>
                        </Col>
                    </Row>

                    <div className={styles.cardsContainer}>
                        <div className={styles.cardsSlide}>
                            {
                                seenFilms.map((seenFilm, i) => (
                                    <div className={styles.cards}>
                                        <img src={seenFilm.url} alt=""/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Row>
                        <Col span={24}>
                            <p className={styles.statistic}>{t('seen.statistic')}</p>
                        </Col>
                    </Row>
                    <Row className={styles.myTags}>
                        <Col span={13}>
                            <span>Драма</span>
                            <span>Спорт</span>
                            <span>США</span>
                            <span>Новинки</span>
                        </Col>
                        <Col span={11}>
                            <p className={styles.tags}> + еще 15 тегов</p>
                        </Col>
                    </Row>
                    <Row className={styles.right}>
                        <Col span={24}>
                            <span>{t('seen.right')}</span>
                            <span className={styles.icon}> <DislikeOutlined /></span>
                            <span className={styles.icon}> <LikeFilled /></span>
                        </Col>

                    </Row>
                </div>

            </UserWrapper>
        </div>

    );
};

export async function getServerSideProps({query}) {

    const {user} = query;
    return {
        props: {
            user
        }
    };
}

export default Seen;
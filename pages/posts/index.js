import React, {useState} from 'react';
import {Header, Footer} from '../../components/common';
import {Row, Col, Rate, Modal, Button, Input} from "antd";
import {
    BlockOutlined,
    EyeOutlined,
    MessageOutlined
} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';
import styles from '../styles/posts.scss'
import grid from "../../styles/grid.scss";
const Posts = () => {
    const {t} = useTranslation();

    const [filmsCard] = useState([
        {
            "url": "/images/posts/2.png",
            "info": "Все мои призраки, все мои косточки: Разбираем «Американскую историю ужасов»",
            "tag": "Культовое",
            "views": "345",
            "comments":"10"
        },
        {
            "url": "/images/posts/8.png",
            "info": "Все мои призраки, все мои косточки: Разбираем «Американскую историю ужасов»",
            "tag": "Боевик",
            "views": "3445",
            "comments":"1"
        },
        {
            "url": "/images/posts/4.png",
            "info": "Как создатели «Остаться в живых» обманули всех",
            "tag": "США",
            "views": "45",
            "comments":"10"
        },
        {
            "url": "/images/posts/5.png",
            "info": "Все мои призраки, все мои косточки: Разбираем «Американскую историю ужасов»",
            "tag": "Культовое",
            "views": "345",
            "comments":"10"
        },
        {
            "url": "/images/posts/6.png",
            "info": "Почему «Во все тяжкие» вызывает привыкание",
            "tag": "Приключение",
            "views": "345",
            "comments":"10"
        },
        {
            "url": "/images/posts/7.png",
            "info": "Как «Зачарованные» стали манифестом феминизма",
            "tag": "Мистика",
            "views": "345",
            "comments":"10"
        }

    ]);
    return (
        <div className={styles.posts}>
            <div className={grid.container}>
                <Header
                    links={[
                        {
                            'url': '/hello',
                            'text': 'Посмотреть позже'
                        },
                        {
                            'url': '/hello',
                            'text': 'История поиска'
                        },
                        {
                            'url': '/hello',
                            'text': 'Понравившееся'
                        },

                    ]}/>
            </div>

            <div className={grid.container}>
                <Row>
                    <Col span={24}>
                        <h1 className={styles.media} >{t('posts.title')}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Row>
                            <Col span={6}>
                                <p className={styles.menu}>{t('posts.media')}</p>
                            </Col>
                            <Col span={5}>
                                <p className={`${styles.active} ${styles.menu}`}>{t('posts.articles')}</p>
                            </Col>
                            <Col span={5}>
                                <p className={styles.menu}>{t('posts.podcasts')}</p>
                            </Col>
                            <Col span={6}>
                                <p className={styles.menu}>{t('posts.reviews')}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <div className={styles.catBtn}>
                            <button className={styles.btn}>
                                <BlockOutlined  className={styles.icon}/>
                                <span>{t('posts.categories')}</span>
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row gutter={50}>
                    <Col span={12}>
                        <Row>
                            <Col span={12} className={styles.event}>
                                <div className={styles.event}>
                                    <h2>Событие месяца</h2>
                                    <p>Бугагашеньке конец: Прощаемся с «Теорией большого взрыва»</p>
                                </div>
                                <Row className={styles.views}>
                                    <Col span={12} >
                                        <div className={styles.view}>
                                            <EyeOutlined className={styles.icon} />
                                            <span className={styles.viewCount}>4524</span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.comments}>
                                            <MessageOutlined className={styles.icon}/>
                                            <span className={styles.commentsCount}>10</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12} className={styles.post} />
                        </Row>
                    </Col>
                    {
                        filmsCard.map((film) => (
                            <Col span={6}>
                                <Row>
                                    <Col span={24} className={styles.card}>
                                        <div className={styles.cardImg}
                                             style={{
                                                 backgroundImage: `url("${film.url}")`
                                             }}/>
                                        <div >
                                            <p className={styles.title}>{film.info}</p>
                                            <div >
                                                <span className={styles.btn}>{film.tag}</span>
                                            </div>

                                            <Row className={styles.views}>
                                                <Col span={12} >
                                                    <div className={styles.view}>
                                                        <EyeOutlined className={styles.icon} />
                                                        <span className={styles.viewCount}>{film.views}</span>
                                                    </div>
                                                </Col>
                                                <Col span={12}>
                                                    <div className={styles.comments}>
                                                        <MessageOutlined className={styles.icon}/>
                                                        <span className={styles.commentsCount}>{film.comments}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    <Col span={24}>
                        <div className={styles.cardImagine}>
                            <div className={styles.cardTitle}>
                                <h3>Как «Зачарованные» стали манифестом феминизма</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.showMore}>
                    <Col span={24}>
                        <button className={styles.showMoreBtn}>
                            {t('posts.showMore')}
                        </button>
                    </Col>
                </Row>

            </div>

            <div className={grid.container}>
                <Footer/>
            </div>
        </div>

    );
};

export default Posts;
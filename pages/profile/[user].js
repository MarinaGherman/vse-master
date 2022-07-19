import React  from 'react';
import {Row, Col, Rate, Input} from "antd";
import ShowMoreText from 'react-show-more-text';
import Link from 'next/link';
import {
    PlusOutlined,
} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';
import styles from '../styles/user.scss';
import UserWrapper from "../../components/user/UserWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/slider.css';

const User = ({user}) => {

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const {t} = useTranslation();
    return (
        <div>
            <UserWrapper user={user}>
                <Row>
                    <Col span={24}>
                        <div className={styles.helloBlock}>
                            <h1>Привет, Иван!</h1>
                            <Row>
                                <Col span={4} >
                                    <div className={styles.seenSeries}>
                                        <h1>12</h1>
                                        <p>{t('profile.yourSeen')}</p>
                                    </div>
                                </Col>
                                <Col span={5} offset={1}>
                                    <div className={styles.seenSeries}>
                                        <h1>8</h1>
                                        <p>{t('profile.touWantSee')}</p>
                                    </div>
                                </Col>
                                <Col span={5} offset={1}>
                                    <div>
                                        <h1>8</h1>
                                        <p>{t('profile.touWantSee2')}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} className={styles.searched}>
                        <h2>{t('profile.searched')}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col span={7} >
                        <Row className={styles.moodCard}>
                            <Col span={6}>
                                <span className={styles.emoji}>🥳</span>
                            </Col>
                            <Col span={18}>
                                <div className={styles.moodCardText}>
                                    <span>пришел с работы</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={7} >
                        <Row className={styles.moodCard}>
                            <Col span={6}>
                                <span className={styles.emoji}>🥰</span>
                            </Col>
                            <Col span={18}>
                                <div className={styles.moodCardText}>
                                    <span>вдвоем</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={7} >
                        <Row className={styles.moodCard}>
                            <Col span={6}>
                                <span className={styles.emoji}>🤒</span>
                            </Col>
                            <Col span={18}>
                                <div className={styles.moodCardText}>
                                    <span>приболел</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={styles.reviews}>
                    <Col span={15} >
                        <Row>
                            <Col span={12}>
                                <Link href="/profile/1/reviews">
                                    <a>
                                        <p className={styles.myReviewsTitle}>{t('profile.reviews')}</p>
                                    </a>
                                </Link>
                            </Col>
                            <Col span={12}>
                                <p className={styles.myReviews}>Вы написали 5 рецензий</p>
                            </Col>
                        </Row>
                        <Slider {...sliderSettings}>
                            <div className={styles.sliderItem}>
                                <div className={styles.commentsBlock}>
                                    <Row >
                                        <Col span={16}>
                                            <h3>Стильно и захватывающе... о шахматах!</h3>
                                        </Col>
                                        <Col span={8}>
                                            <Rate disabled defaultValue={4} className={styles.rate} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <div className={styles.comment}>
                                                <ShowMoreText
                                                    lines={3}
                                                    more= {<span className={styles.readMore}>Читать полностью</span>}
                                                    less={<span className={styles.readLess}>Свернуть</span>}
                                                    className={styles.showMore}
                                                    expanded={true}
                                                >
                                            <span>
                                                Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?
                                                Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?
                                            </span>
                                                </ShowMoreText>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div>
                                <div className={styles.commentsBlock}>
                                    <Row >
                                        <Col span={16}>
                                            <h3>Стильно и захватывающе... о шахматах!</h3>
                                        </Col>
                                        <Col span={8}>
                                            <Rate disabled defaultValue={4} className={styles.rate} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <div className={styles.comment}>
                                                <ShowMoreText
                                                    lines={3}
                                                    more= {<span className={styles.readMore}>Читать полностью</span>}
                                                    less={<span className={styles.readLess}>Свернуть</span>}
                                                    className={styles.showMore}
                                                    expanded={true}
                                                >
                                            <span>
                                                Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?
                                                Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?
                                            </span>
                                                </ShowMoreText>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div>
                                <div className={styles.commentsBlock}>
                                    <Row >
                                        <Col span={16}>
                                            <h3>Стильно и захватывающе... о шахматах!</h3>
                                        </Col>
                                        <Col span={8}>
                                            <Rate disabled defaultValue={4} className={styles.rate} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <div className={styles.comment}>
                                                <ShowMoreText
                                                    lines={3}
                                                    more= {<span className={styles.readMore}>Читать полностью</span>}
                                                    less={<span className={styles.readLess}>Свернуть</span>}
                                                    className={styles.showMore}
                                                    expanded={true}
                                                >
                                            <span>
                                                Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?
                                                Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?
                                            </span>
                                                </ShowMoreText>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Slider>

                    </Col>
                    <Col span={8} offset={1}>
                        <div className={styles.myTags}>
                            <h2> {t('profile.myTags')}</h2>
                            <span className={styles.tag}>Драма</span>
                            <span className={styles.tag}>Спорт</span>
                            <span className={styles.tag}>США</span>
                            <span className={styles.tag}>Новинки</span>
                        </div>
                        <div className={styles.allMyTags}>
                            <p>+ еще 15 тегов</p>
                        </div>
                        <div className={styles.addTags}>
                            <p>{t('profile.addTags')}</p>
                        </div>
                        <div className={styles.inputTagDiv}>
                            <Input className={styles.inputTag}
                                   placeholder="Новый тег"
                                   suffix={<PlusOutlined className={styles.tagPlusIcon} />} />
                        </div>

                    </Col>
                </Row>
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

export default User;
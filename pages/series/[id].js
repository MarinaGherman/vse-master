import React, {useState} from 'react';
import {Header, Footer} from '../../components/common';
import Card from '../../components/cards/Card'
import {Row, Col, Rate, Modal, Button, Input} from "antd";
import {
    StarFilled,
    DislikeFilled,
    LikeFilled,
    DislikeOutlined,
    LikeOutlined,
    CheckCircleOutlined,
    CheckCircleFilled,
    MessageOutlined
} from '@ant-design/icons';
import ShowMoreText from 'react-show-more-text';
import {useTranslation} from 'react-i18next';
import styles from '../styles/series.scss'
import grid from "../../styles/grid.scss";
import PlatformCard from "../../components/platformCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/slider.css';

const Series = ({id}) => {
    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const { TextArea } = Input;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [serials] = useState([
        {
            "title": "Ход королевы",
            "original": "2020, The Queen's Gambit",
            "img": "/images/serials/gambit.png",
            "imdb": '8,4',
            "kinopoisk": "8,4",
            "tegs" : {
                "drama": "Драма",
                "sport": "Спорт",
                "usa": "США",
                "new": "Новинки",
                "think": "На подумать",
                "ration": "Высокий рейтинг",
            },
            "reg": "Скотт Фрэнк",
            "roles" : "Аня Тейлор-Джой, Мариэль Хеллер, Моусес Ингрэм, Айла Джонстон, Билл Кэмп, Гарри Меллинг, Томас Сэнгстер, Джейкоб Форчун-Ллойд, Мэттью Дэннис Льюис",
            "intesersted" : 16738,
            "views": 6790,
            "state": "Вышел 7 сезон",
            "date": "02.02.21",
            "trailer": "/images/serials/trailer.png",
            "about": "Штат Кентукки, 1957 год. После смерти матери 9-летняя Элизабет Хармон остаётся сиротой и отправляется в католический приют. В этом заведении детям регулярно дают «витамины», и по совету другой подопечной Бет оставляет зелёные капсулы на ночь. Там же девочка знакомится с пожилым уборщиком Шайбелем, которого просит научить её играть в шахматы. Днём, сбежав со скучных занятий под предлогом помыть тряпку, Бет играет с мистером Шайбелем в его подвальной подсобке, а ночью, приняв зелёную капсулу, прокручивает шахматные партии на потолке общей спальни. Через несколько лет девочку удочерят, у неё начнётся совсем другая жизнь."
        }
    ]);
    const [reviews] = useState([
        {
            "total": 90,
            "positive": 80,
            "negative": 10,
            "reviews": ""

        }
    ]);
    const [platforms] = useState([
        {
            "url": "/images/platform/premier.svg",
            "name": "Доступны новые серии",
            "price": "199 ₽"
        },
        {
            "url": "/images/platform/ivi.svg",
            "name": "Больше всех любят Ход Королевы",
            "price": "199 ₽"
        },
        {
            "url": "/images/platform/okko.svg",
            "name": "Скидки весь февраль",
            "price": "199 ₽"
        },
        {
            "url": "/images/platform/megogo.svg",
            "name": "Доступны новые серии",
            "price": "199 ₽"
        },
        {
            "url": "/images/platform/tvzavr.svg",
            "name": "Скидки весь февраль",
            "price": "199 ₽"
        }
    ]);
    const [relatedFilms] = useState([
        {
            "link": '/series/1',
            "url": "/images/cards/1.png"
        },
        {
            "link": '/series/1',
            "url": "/images/cards/2.png"
        },
        {
            "link": '/series/1',
            "url": "/images/cards/3.png"
        }
    ]);

    const {t} = useTranslation();
    return (
        <div>
            <div className={grid.container}>
                <Header/>
            </div>

            <div className={styles.series}>
                <div className={grid.container}>
                    <Row className={styles.filter}>
                        <span className={styles.active}>{t('series.allSeries')}</span><span>/</span>
                        <span>{t('series.lookNow')}</span><span>/</span>
                        <span>{t('series.searchCurrently')}</span>
                    </Row>
                    <Row className={styles.aboutSeries}>
                        <Col span={8}>
                            <img className={styles.cover} src="/images/serials/gambit.png" alt=""/>
                            <Row className={styles.seen}>
                                <Col span={12}>
                                    <span>{t('series.interested')}</span>
                                    <p>16738</p>
                                </Col>
                                <Col span={2}>
                                    <img src="/images/common/seen.svg" alt=""/>
                                </Col>
                                <Col span={10}>
                                    <span>{t('series.seen')}</span>
                                    <p>6790</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={16}>
                            <Row>
                                <Col span={12} className={styles.titles}>
                                    <h1>Ход королевы</h1>
                                    <p>2020, The Queen's Gambit</p>
                                </Col>
                                <Col span={8} offset={4} className={`${styles.ration} ${styles.titles}`}>
                                    <Row align="middle">
                                        <Col span={12} >
                                            <p>IMDb</p>
                                            <h1>8,4</h1>
                                        </Col>
                                        <Col span={12}>
                                            <p>Кинопоиск</p>
                                            <h1>8,4</h1>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className={styles.rating}>
                                <Col span={4}>
                                    <Rate className={styles.rate} />
                                </Col>
                                <Col span={4}>
                                    <button className={styles.btn}>
                                        <StarFilled className={styles.iconStar}/>
                                        <span> {t('series.rate')}</span>
                                    </button>
                                </Col>
                            </Row>
                            <Row className={styles.tags}>
                                <div className={styles.tagsBlock} >
                                    <span> Драма</span>
                                </div>
                                <div className={styles.tagsBlock} >
                                    <span> Спорт</span>
                                </div>
                                <div className={styles.tagsBlock} >
                                    <span> США</span>
                                </div>
                                <div className={styles.tagsBlock} >
                                    <span> Новинки</span>
                                </div>
                                <div className={styles.tagsBlock} >
                                    <span> На подумать</span>
                                </div>
                                <div className={styles.tagsBlock} >
                                    <span> Высокий рейтинг</span>
                                </div>

                                <div className={styles.tagsNumber}>
                                    <p>+ еще 15 тегов</p>
                                </div>
                            </Row>
                            <Row className={styles.roles}>
                                <div>
                                    <h3>{t('series.reg')}</h3>
                                    <p>Скотт Фрэнк</p>
                                </div>
                            </Row>
                            <Row className={styles.roles}>
                                <div>
                                    <h3>{t('series.roles')}</h3>
                                    <ShowMoreText
                                        lines={2}
                                        more= {<span className={styles.more}>Больше</span>}
                                        less={<span className={styles.less}>Меньше</span>}
                                        className={styles.showMore}
                                        expanded={false}
                                    >
                                        Аня Тейлор-Джой, Мариэль Хеллер, Моусес Ингрэм, Айла Джонстон, Билл Кэмп, Гарри Меллинг, Томас Сэнгстер, Джейкоб Форчун-Ллойд,линг, Томас Сэнгстер, Джейкоб Форчун-Ллойд,линг, Томас Сэнгстер, Джейкоб Форчун-Ллойд, Мэттью Дэннис Льюис
                                    </ShowMoreText>
                                </div>
                            </Row>
                            <Row className={styles.notes}>
                                <Col span={8}>
                                    <img src="/images/common/icon-series.svg" alt=""/>
                                    <span>{t('series.later')}</span>
                                </Col>
                                <Col span={8}>
                                    <img src="/images/common/clock-series.svg" alt=""/>
                                    <span>{t('series.newEpisod')}</span>
                                </Col>
                                <Col span={8}>
                                    <img src="/images/common/check-series.svg" alt=""/>
                                    <span>{t('series.before')}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={styles.startWatching}>
                        <Col span={8}>
                            <h1>{t('series.start')}</h1>
                        </Col>
                        <Col span={14}>
                                <span className={styles.newsBlock}>Вышел 7 эпизод</span>
                                <span className={styles.dateBlock}>02.02.2021</span>
                        </Col>
                    </Row>
                    <div className={styles.platforms}>
                        <div className={styles.platformsScroll} >
                            {platforms.map(platform => (
                                <PlatformCard {...platform} />
                            ))}
                        </div>
                    </div>
                    <Row className={styles.trailer}>
                        <Col span={11} >
                            <Row>
                                <Col span={24}>
                                    <div className={styles.icon}>
                                        <div className={styles.trailerDiv}>
                                            <img className={styles.trailerImg} src="/images/serials/trailer.jpeg" alt=""/>
                                            <div className={styles.trailerIcon} >
                                                <img src="/images/common/icon.png" alt=""/>
                                                <img className={styles.playImg} src="/images/common/play.png" alt=""/>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <ShowMoreText
                                        lines={10}
                                        more= {<span className={styles.more}>Больше</span>}
                                        less={<span className={styles.less}>Меньше</span>}
                                        className={styles.showMore}
                                        expanded={false}
                                    >
                                        <span>Штат Кентукки, 1957 год. После смерти матери 9-летняя Элизабет Хармон остаётся сиротой и отправляется в католический приют. В этом заведении детям регулярно дают «витамины», и по совету другой подопечной Бет оставляет зелёные капсулы на ночь. Там же девочка знакомится с пожилым уборщиком Шайбелем, которого просит научить её играть в шахматы. Днём, сбежав со скучных занятий под предлогом помыть тряпку, Бет играет с мистером Шайбелем в его подвальной подсобке, а ночью, приняв зелёную капсулу, прокручивает шахматные партии на потолке общей спальни. Через несколько лет девочку удочерят, у неё начнётся совсем другая жизнь.</span>
                                        <span>Штат Кентукки, 1957 год. После смерти матери 9-летняя Элизабет Хармон остаётся сиротой и отправляется в католический приют. В этом заведении детям регулярно дают «витамины», и по совету другой подопечной Бет оставляет зелёные капсулы на ночь. Там же девочка знакомится с пожилым уборщиком Шайбелем, которого просит научить её играть в шахматы. Днём, сбежав со скучных занятий под предлогом помыть тряпку, Бет играет с мистером Шайбелем в его подвальной подсобке, а ночью, приняв зелёную капсулу, прокручивает шахматные партии на потолке общей спальни. Через несколько лет девочку удочерят, у неё начнётся совсем другая жизнь.</span>
                                    </ShowMoreText>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={11} offset={2} className={styles.comments}>
                            <Row>
                                <Col span={24} offset={1} >
                                    <h1>{t('series.comments')}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <p>{t('series.allComments')}</p>
                                    <h2>90</h2>
                                </Col>
                                <Col span={6}>
                                    <p>{t('series.positive')}</p>
                                    <h2>80</h2>
                                </Col>
                                <Col span={6}>
                                    <p>{t('series.negative')}</p>
                                    <h2>10</h2>
                                </Col>
                            </Row>
                            <Slider {...sliderSettings}>
                                <div className={styles.sliderItem}>
                                    <div className={styles.commentsBlock}>
                                        <Row >
                                            <Col span={16}>
                                                <h3>Стильно и захватывающе... о шахматах!</h3>
                                            </Col>
                                            <Col span={8} >
                                                <Rate disabled defaultValue={4} className={styles.rate} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className={styles.comment}>
                                                <ShowMoreText
                                                    lines={3}
                                                    more= {<span className={styles.readMore}>Читать полностью</span>}
                                                    less={<span className={styles.readLess}>Свернуть</span>}
                                                    className={styles.showMore}
                                                    expanded={false}
                                                >
                                                    <p>Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?</p>
                                                    <p>Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?</p>
                                                </ShowMoreText>
                                            </div>
                                        </Row>
                                        <Row align="end">
                                            <div className={styles.discuss}>

                                                <span>{t('series.discuss')}</span>
                                                <MessageOutlined className={styles.discussIcon}/>
                                            </div>

                                        </Row>
                                        <hr className={styles.hr}/>
                                        <Row className={styles.userBlock}>
                                            <Col span={4} >
                                                <img className={styles.userImg} src="/images/serials/user.png" alt=""/>
                                            </Col>
                                            <Col span={20} className={styles.status}>
                                                <h1 className={styles.userName}>Анна Франк</h1>
                                                <img className={styles.medalIcon } src="/images/common/medal.svg" alt=""/>
                                                <span>{t('series.medal')}</span>
                                                <p>10 рецензий</p>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>
                                <div className={styles.sliderItem}>
                                    <div className={styles.commentsBlock}>
                                        <Row >
                                            <Col span={16}>
                                                <h3>Стильно и захватывающе... о шахматах!</h3>
                                            </Col>
                                            <Col span={8} >
                                                <Rate disabled defaultValue={4} className={styles.rate} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className={styles.comment}>
                                                <ShowMoreText
                                                    lines={3}
                                                    more= {<span className={styles.readMore}>Читать полностью</span>}
                                                    less={<span className={styles.readLess}>Свернуть</span>}
                                                    className={styles.showMore}
                                                    expanded={false}
                                                >
                                                    <p>Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?</p>
                                                    <p>Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?</p>
                                                </ShowMoreText>
                                            </div>
                                        </Row>
                                        <Row align="end">
                                            <div className={styles.discuss}>

                                                <span>{t('series.discuss')}</span>
                                                <MessageOutlined className={styles.discussIcon}/>
                                            </div>

                                        </Row>
                                        <hr className={styles.hr}/>
                                        <Row className={styles.userBlock}>
                                            <Col span={4} >
                                                <img className={styles.userImg} src="/images/serials/user-icon2.jpeg" alt=""/>
                                            </Col>
                                            <Col span={20} className={styles.status}>
                                                <h1 className={styles.userName}>Иван Костров</h1>
                                                <img className={styles.medalIcon } src="/images/common/medal.svg" alt=""/>
                                                <span>{t('series.medal')}</span>
                                                <p>10 рецензий</p>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>
                                <div className={styles.sliderItem}>
                                    <div className={styles.commentsBlock}>
                                        <Row >
                                            <Col span={16}>
                                                <h3>Стильно и захватывающе... о шахматах!</h3>
                                            </Col>
                                            <Col span={8} >
                                                <Rate disabled defaultValue={2} className={styles.rate} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className={styles.comment}>
                                                <ShowMoreText
                                                    lines={3}
                                                    more= {<span className={styles.readMore}>Читать полностью</span>}
                                                    less={<span className={styles.readLess}>Свернуть</span>}
                                                    className={styles.showMore}
                                                    expanded={false}
                                                >
                                                    <p>Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?</p>
                                                    <p>Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?</p>
                                                </ShowMoreText>
                                            </div>
                                        </Row>
                                        <Row align="end">
                                            <div className={styles.discuss}>

                                                <span>{t('series.discuss')}</span>
                                                <MessageOutlined className={styles.discussIcon}/>
                                            </div>

                                        </Row>
                                        <hr className={styles.hr}/>
                                        <Row className={styles.userBlock}>
                                            <Col span={4} >
                                                <img className={styles.userImg} src="/images/serials/user.png" alt=""/>
                                            </Col>
                                            <Col span={20} className={styles.status}>
                                                <h1 className={styles.userName}>Анна Франк</h1>
                                                {/*<img className={styles.medalIcon } src="/images/common/medal.svg" alt=""/>*/}
                                                {/*<span>{t('series.medal')}</span>*/}
                                                <p>10 рецензий</p>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>

                            </Slider>

                            <Row justify="center" className={styles.seeReviews}>
                                <Col span={8}>
                                    <p>{t('series.reviews')}</p>
                                </Col>
                                <Col span={8}>
                                    <p
                                        onClick={showModal}
                                        className={styles.feedback}>{t('series.feedback')}
                                    </p>
                                    <Modal
                                        title={ <div className={styles.modalHeader}>
                                            <p>{t('modal.title')}</p>
                                            <span className={styles.rules}>{t('modal.rules')}</span>
                                            <span className={`${styles.rules} ${styles.rulesLine}`}>{t('modal.rules2')}</span>
                                        </div> }
                                        visible={isModalVisible}
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                        bodyStyle={{
                                            backgroundColor: "black"
                                        }}
                                        footer={<div className={styles.modalFooter}>
                                            <Button className={styles.modalBtn}>
                                                Опубликовать
                                            </Button>
                                        </div>}
                                    >
                                        <div className={styles.modalBody}>
                                            <h3>{t('modal.feedback')}</h3>
                                            <Row>
                                                <Col span={12}>
                                                    <CheckCircleFilled className={styles.checkbox} />
                                                    <span className={styles.checkboxText}>{t('modal.positive')}</span>
                                                </Col>
                                                <Col span={12}>
                                                    <CheckCircleOutlined className={styles.checkbox} />
                                                    <span className={styles.checkboxText}>{t('modal.positive')}</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Input placeholder={t('modal.placeholder1')} />
                                                <TextArea placeholder={t('modal.placeholder2')} rows={10}/>
                                            </Row>

                                        </div>
                                    </Modal>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={styles.likedSerial}>
                        <Col span={24}>
                            <h1 className={styles.liked}>{t('series.likedSerial')}</h1>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        {
                            relatedFilms.map((film) => (
                                <Col span={8}>
                                    <Card {...film}/>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row>
                        <Col span={24} className={styles.access}>
                            <span>{t('series.access')}</span>
                            <span className={styles.accessEnter}>{t('series.access2')}</span>
                        </Col>
                    </Row>
                    <div className={styles.comments}>
                        <Row justify="center">
                            <Col span={20} className={styles.commentsBlock}>
                                <Row>
                                    <Col span={2} className={styles.commentsUser}>
                                        <img className={styles.commentsUserImg} src="/images/serials/user.png" alt=""/>
                                        <Row justify="center">
                                            <Col span={8} className={styles.likeIcon}>
                                                <LikeFilled />
                                            </Col>
                                            <Col span={8}>
                                                2
                                            </Col>
                                            <Col span={8} className={styles.dislikeIcon}>
                                                <DislikeOutlined />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={20} offset={1} className={styles.userName}>
                                        <Row>
                                            <Col span={12} >
                                                <img src="/images/common/user-icon.svg" alt=""/>
                                                <span className={styles.nickname}>foxikru</span>
                                            </Col>
                                            <Col span={12} className={styles.commentTime}>
                                                <span>23:14 22.02.2021</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}>
                                                <p>Не поняла, почему она журналисту разбила сердце и почему он хотел быть с ней друзьями, я что-то пропустила?</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.reply}>
                        <Row justify="center">
                            <Col span={19} offset={1} className={styles.replyBlock}>
                                <Row>
                                    <Col span={2} className={styles.commentsUser}>
                                        <img className={styles.commentsUserImg} src="/images/serials/user-icon2.jpeg" alt=""/>
                                        <Row justify="center">
                                            <Col span={8} className={styles.likeIcon}>
                                                <LikeOutlined />
                                            </Col>
                                            <Col span={8}>
                                                -1
                                            </Col>
                                            <Col span={8} className={styles.dislikeIcon}>
                                                <DislikeFilled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={20} offset={1} className={styles.userName}>
                                        <Row>
                                            <Col span={12} >
                                                <img src="/images/common/user-icon.svg" alt=""/>
                                                <span className={styles.nickname}>user5784</span>
                                            </Col>
                                            <Col span={12} className={styles.commentTime}>
                                                <span>23:14 22.02.2021</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}>
                                                <p>можно много хотеть, но имея таланта, хотелки придётся поумерить:)</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                    <div className={styles.pagination}>
                        <Row justify="center">
                            <Col>
                                <img src="/images/serials/left.svg" alt=""/>
                                <img src="/images/serials/dot.svg" alt=""/>
                                <img src="/images/serials/right.svg" alt=""/>
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

export async function getServerSideProps({query}) {

    const {id} = query;

    return {
        props: {
            id
        }
    };
}

export default Series;
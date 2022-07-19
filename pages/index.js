import React, {useState} from 'react';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {Header, Footer} from '../components/common';
import {Row, Col, Input} from "antd";
import grid from '../styles/grid.scss';
import styles from './styles/index.scss';
import {DownOutlined, SearchOutlined} from '@ant-design/icons';
import Slider from "../components/slider-disposition";
import Cards from "../components/cards";
import MoodCards from "../components/moodCard"


const Home = ({domain}) => {

    const {t} = useTranslation();
    const router = useRouter();

    const [lastFilms] = useState([
        {
            "link": "/series/1",
            "url": "images/cards/1.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/2.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/3.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/4.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/5.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/6.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/1.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/2.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/3.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/4.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/5.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/6.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/5.png"
        },
        {
            "link": "/series/1",
            "url": "images/cards/6.png"
        }

    ]);
    const [bestFilms] = useState([...lastFilms]);
    const [moodCards] = useState([
        {
            "url": "images/moodCards/thinking.png",
            "text": "Настроение меланхоличное, хочется чего-то со смыслом"
        },
        {
            "url": "images/moodCards/hat.png",
            "text": "Хочу отвлечься после работы на что-то веселое и драйвовое"
        },
        {
            "url": "images/moodCards/inlove.png",
            "text": "Что-нибудь для романтического вечера вдвоем"
        },
        {
            "url": "images/moodCards/thinking.png",
            "text": "Настроение меланхоличное, хочется чего-то со смыслом"
        },
        {
            "url": "images/moodCards/hat.png",
            "text": "Хочу отвлечься после работы на что-то веселое и драйвовое"
        },
        {
            "url": "images/moodCards/inlove.png",
            "text": "Что-нибудь для романтического вечера вдвоем"
        },

    ]);


    return (
        <div>
            <Head>
                <title>{t('index.meta.title')}</title>
                <meta name="description" content={t('index.meta.description')}/>
                <meta property="og:title" content={t('index.meta.title')} key="ogtitle"/>
                <meta property="og:description" content={t('index.meta.description')} key="ogdesc"/>
                <meta property="og:url" content={`${domain}${router.pathname}`} key="ogurl"/>
                <meta property="og:image" content={`${domain}/images/meta/index.png`} key="ogimage"/>
                <meta property="og:site_name" content={t('index.meta.siteName')} key="ogsitename"/>
            </Head>


            <div className={grid.container}>
                <Header/>
            </div>

            <div className={styles.main}>
                <div className={grid.container}>
                    <Row>
                        <Col xl={24}>
                            <p>{t('index.head.title')}</p>
                            <h1 dangerouslySetInnerHTML={{__html: t('index.head.start')}}/>
                        </Col>
                    </Row>

                    <Row xl={24} xs={12} className={styles.menu}>
                        <Col span={12} className={`${styles.mobile}`}>
                            <span>{t('index.head.disposition')}</span>
                            <span className={styles.arrowIcon}><DownOutlined /></span>
                        </Col>
                        <Col span={5} className={`${styles.texts} ${styles.active}`}>
                            <span>{t('index.head.disposition')}</span>
                            <span className={styles.arrowIcon}><DownOutlined /></span>
                        </Col>
                        <Col span={3} className={`${styles.texts}`}>
                            <span>{t('index.head.genre')}</span>
                            <span className={styles.arrowIcon}><DownOutlined /></span>
                        </Col>
                        <Col span={4} className={styles.texts}>
                            <span>{t('index.head.new')}</span>
                            <span className={styles.arrowIcon}><DownOutlined /></span>
                        </Col>
                        <Col span={5} className={styles.texts}>
                            <span>{t('index.head.seasons')}</span>
                            <span className={styles.arrowIcon}><DownOutlined /></span>
                        </Col>
                        <Col span={7} className={styles.texts}>
                            <span>{t('index.head.wait')}</span>
                            <span className={styles.arrowIcon}><DownOutlined /></span>
                        </Col>
                    </Row>
                    <Row span={24} className={styles.slider}>
                        <Slider/>
                        <Col xl={8} xs={24} className={styles.sliderText}>
                            <span>{t('index.head.search')}</span>
                        </Col>
                        <Col xl={16} xs={24}>
                            <Input
                                className={styles.input}
                                placeholder={t('index.head.placeholder')}
                                suffix={<SearchOutlined/>}
                            />
                        </Col>
                    </Row>
                </div>
            </div>

            <div className={styles.frequentFilms}>
                <div className={grid.container}>
                    <Row className={styles.filter}>
                        <span className={styles.active}>{t('index.filter.forYou')}</span><span>/</span>
                        <span>{t('index.filter.seeNow')}</span><span>/</span>
                        <span>{t('index.filter.frequently')}</span>
                    </Row>
                    <Row className={styles.find}>
                        <span className={styles.findText}>{t('index.filter.find')}</span>
                        <span>33</span>
                        <span>{t('index.filter.value')}</span>
                    </Row>
                    <Cards items={lastFilms}/>
                </div>

                <div className={styles.popularFilms}>
                    <div className={grid.container}>
                        <Row className={styles.popular}>
                            <Col xl={12} xs={24}>
                                <p className={`${styles.title} ${styles.orange}`}> {t('index.filter.popular')}</p>
                                <p className={`${styles.title} ${styles.white}`}>{t('index.filter.popular2')}</p>
                            </Col>
                            <Col xl={12} xs={24} className={styles.map}>
                                <img className={styles.mapImg} src="images/common/map.png" alt=""/>
                                <span>{t('index.filter.city')}</span>
                            </Col>
                        </Row>
                        <Cards items={bestFilms.reverse()}/>
                    </div>
                </div>
            </div>

            <div className={styles.frequentSearch}>
               <div className={grid.container}>
                   <Row className={styles.popular}>
                       <Col span={24}>
                           <p className={`${styles.title} ${styles.white}`}>{t('index.filter.freqSearch')}</p>
                           <p className={`${styles.title} ${styles.orange}`}> {t('index.filter.freqSearch2')}</p>
                           <MoodCards items={moodCards} />
                       </Col>
                   </Row>
               </div>
            </div>

            <div className={styles.search}>
                <div className={grid.container}>
                    <h2>{t('index.search.searchTitle')}</h2>
                    <Row>
                        <Col xl={12} xs={18} offset={6} className={styles.inputSearch}>
                            <Input
                                className={styles.input}
                                suffix={<SearchOutlined />}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.block}>
                <div className={grid.container}>
                    <div className={styles.newsBlock}>
                        <Row>
                            <Col xl={5} xs={12}>
                                <span>{t('index.search.block')}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12} xs={24}>
                                <p> {t('index.search.blockBold')}</p>
                            </Col>
                            <Col xl={12} xs={24}>
                                    <button className={styles.btn}>
                                        <span>{t('index.search.blockBtn')}</span>
                                    </button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className={styles.about}>
                <div className={grid.container}>
                   <Row>
                       <Col xl={9} xs={24}>
                           <p className={`${styles.title} ${styles.white}`}>{t('index.about.aboutProject')}</p>
                           <p className={`${styles.title} ${styles.orange}`}> {t('index.about.aboutProject2')}</p>
                           <p className={styles.subtitle}>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa magna est gravida at felis porta montes, magna at.
                           </p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa magna est gravida at felis porta montes, magna at. Nibh volutpat integer porttitor quam mauris bibendum parturient.</p>
                           <p>Urna nec eget sit scelerisque. Pellentesque et morbi rhoncus morbi accumsan posuere enim lectus.</p>
                       </Col>
                       <Col xl={15} xs={24} className={styles.aboutImg}>
                           <img src="images/common/about.png" alt=""/>
                       </Col>
                   </Row>
                </div>
            </div>

            <div className={styles.blog}>
                <div className={grid.container}>
                    <Row>
                        <Col xl={8} sm={24}>
                            <Link href="/posts">
                                <a>
                                    <p className={styles.blogTitle}>
                                        {t('index.blog.blogTitle')}
                                    </p>
                                </a>
                            </Link>
                            <p className={styles.subtitle}>Сюда может тоже добавить SEO текст по крайней мере на первое время?</p>
                        </Col>
                    </Row>
                    <Row className={styles.blogNews} gutter={{xl: 60, xs: 0}}>
                        <Col xl={6} xs={24} >
                            <h1>Вступление к важной новости на примерно 1 предложение</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa magna est gravida at felis porta montes, magna at. </p>
                            <img src="images/blog/blog.png" alt=""/>
                            <Link href="/posts">
                                <a>
                                    <div className={styles.eventBlock}>
                                        <h1>Событие месяца</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </a>
                            </Link>

                        </Col>
                        <Col xl={6} xs={24} >
                            <img src="images/blog/blog-img.png" alt=""/>
                            <h1>Вступление к важной новости </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa magna est gravida at felis porta montes, magna at. </p>
                            <img src="images/blog/blog.png" alt=""/>
                        </Col>
                        <Col xl={6} xs={24}>
                            <img src="images/blog/blog-anons2.png" alt=""/>
                            <h1>Краткий анонс</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <img src="images/blog/blog-anons.png" alt=""/>
                            <h1>Краткий анонс</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </Col>
                        <Col xl={6} xs={24}>
                            <h1>Рассказ про событие месяца</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa magna est gravida at felis porta. </p>
                            <img src="images/blog/blog.png" alt=""/>
                            <hr/>
                            <h1>Рассказ про событие месяца</h1>
                            <img src="images/blog/audio-line.png" alt=""/>
                            <img src="images/blog/blog.png" alt=""/>
                            <br/>
                            <img src="images/blog/headphones.png" alt=""/>
                            <p className={styles.podcasts}>Слушать другие  подкасты</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.rubricator}>
                <div className={styles.rubric}>
                    <div className={grid.container}>
                        <Row gutter={120}>
                            <Col xl={8} xs={24}>
                                <h1>{t('index.rubric.rubricTitle')}</h1>
                                <p className={styles.rubricSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa magna est gravida at felis porta montes, magna at. </p>
                                <p className={styles.openAll}>{t('index.rubric.openAll')}</p>
                            </Col>
                            <Col xl={4} xs={12} className={styles.borders}>
                                <h1 className={styles.letters}>A</h1>
                                <p>{t('index.rubric.artHouse')}</p>
                                <p>{t('index.rubric.dystopia')}</p>
                                <p>{t('index.rubric.absurd')}</p>
                            </Col>
                            <Col xl={4} xs={12} className={styles.borders} >
                                <h1 className={styles.letters}>Б</h1>
                                <p>{t('index.rubric.thriller')}</p>
                                <p>{t('index.rubric.bio')}</p>
                            </Col>
                            <Col xl={4} xs={12} className={styles.borders}>
                                <h1 className={styles.letters}>В</h1>
                                <p>{t('index.rubric.western')}</p>
                                <p>{t('index.rubric.war')}</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className={styles.rubricatorMob}>
                <div className={grid.container}>
                    <Row>
                        <Col xs={24}>
                            <h1>{t('index.rubric.rubricTitle')}</h1>
                            <p className={styles.rubricSubtitle}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque nam repellat! </p>
                        </Col>
                    </Row>
                    <Row className={styles.lettersAlign}>
                        <Col xs={12} className={`${styles.lineRight} ${styles.lineBottom}`}>
                            <h1>A</h1>
                            <p>{t('index.rubric.artHouse')}</p>
                            <p>{t('index.rubric.dystopia')}</p>
                            <p>{t('index.rubric.absurd')}</p>
                        </Col>
                        <Col xs={12} className={styles.lineBottom}>
                            <h1>Б</h1 >
                            <p>{t('index.rubric.thriller')}</p>
                            <p>{t('index.rubric.bio')}</p>
                        </Col>
                    </Row>
                    <Row className={styles.lettersAlign}>
                        <Col xs={12} className={`${styles.lineRight} ${styles.lineBottom}`}>
                            <h1>B</h1>
                            <p>{t('index.rubric.western')}</p>
                            <p>{t('index.rubric.war')}</p>
                        </Col>
                        <Col xs={12} className={styles.lineBottom}>
                            <p className={styles.openAll}>Раскрыть все</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={grid.container}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => ({
    props: {
        domain: process.env.DOMAIN
    },
})

export default Home;

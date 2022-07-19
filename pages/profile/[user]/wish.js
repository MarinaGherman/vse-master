import React, {useState} from 'react';
import {Row, Col} from "antd";
import {useTranslation} from 'react-i18next';
import UserWrapper from "../../../components/user/UserWrapper";
import styles from "../../styles/wish.scss"


const Wish = ({user}) => {

    console.log(user)

    const [wishFilms] = useState([
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
                        <Col span={24} className={styles.wishContainer}>
                            <h1>{t('wish.title')}</h1>
                            <span> {t('wish.wishList')}</span>
                            <span className={styles.wishSeries}>8 сериалов</span>
                        </Col>
                    </Row>
                    <Row gutter={10} >
                        {
                            wishFilms.map((wishFilm, i)=> (
                                <Col span={6}>
                                    <div className={styles.cards}>
                                        <img src={wishFilm.url} alt=""/>
                                    </div>
                                </Col>
                            ))
                        }

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

export default Wish;
import React, {useState} from 'react';
import {Row, Col, Rate} from "antd";
import {useTranslation} from 'react-i18next';
import UserWrapper from "../../../components/user/UserWrapper";
import {
    DislikeOutlined,
    LikeOutlined,
    DislikeFilled,
    LikeFilled
} from '@ant-design/icons';
import styles from "../../styles/reviews.scss"
import ShowMoreText from "react-show-more-text";


const Rewiews = ({user}) => {

    const [comments] = useState([
        {
            title: 'Стильно и захватывающе... о шахматах!',
            rating: 3,
            description: 'Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы? Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?',
            likes: 20,
            dislikes: 5,
            reply: []
        },
        {
            title: 'Стильно и захватывающе... о шахматах!',
            rating: 5,
            description: 'Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы? Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?',
            likes: 123,
            dislikes: 25,
            reply: []
        },
        {
            title: 'Стильно и захватывающе... о шахматах!',
            rating: 4,
            description: 'Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы? Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?',
            likes: 20,
            dislikes: 5,
            reply: []
        },
        {
            title: 'Стильно и захватывающе... о шахматах!',
            rating: 1,
            description: 'Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы? Очевидно, что снять динамичную спортивную драму про гонки Формулы-1 не составляет труда. Легко снять зрелищный фильм про футбол. А шахматы?',
            likes: 123,
            dislikes: 25,
            reply: []
        },
    ])

    const {t} = useTranslation();
    return (
        <div>
            <UserWrapper user={user}>
                <div className={styles.container}>
                    <Row>
                        <Col span={12} className={styles.userReviewsTitle}>
                            <p>{t('reviews.title')}</p>
                        </Col>
                        <Col span={12} className={styles.userReviews}>
                            <p>{t('reviews.userReviews')}</p>
                        </Col>
                    </Row>
                    <div className={styles.allComments}>
                        {comments.map((comment) => (
                            <div className={styles.commentsBlock}>
                                <Row >
                                    <Col span={16}>
                                        <h3>{comment.title}</h3>
                                    </Col>
                                    <Col span={8} className={styles.rate}>
                                        <Rate disabled defaultValue={comment.rating} className={styles.stars}  />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div className={styles.comment}>
                                            <ShowMoreText
                                                lines={2}
                                                more= {<span className={styles.readMore}>Читать полностью</span>}
                                                less={<span className={styles.readLess}>Свернуть</span>}
                                                className={styles.showMore}
                                                expanded={true}
                                            >
                                                <span>{comment.description}</span>
                                            </ShowMoreText>
                                        </div>
                                        <Row>
                                            <Col span={4} >
                                                <div className={styles.likes}>
                                                    <span className={styles.icon}><LikeFilled /></span>
                                                    <span className={styles.count}>{comment.likes}</span>
                                                </div>
                                                <div className={styles.dislikes}>
                                                    <span className={styles.icon}><DislikeOutlined /></span>
                                                    <span className={styles.count}>{comment.dislikes}</span>
                                                </div>
                                            </Col>
                                            <Col span={20}>
                                                <p className={styles.reviews}>У вашей рецензии 2 новых комментария!</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
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

export default Rewiews;
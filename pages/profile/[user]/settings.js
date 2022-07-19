import React, {useState} from 'react';
import {Row, Col, Input, Button} from "antd";
import {useTranslation} from 'react-i18next';
import UserWrapper from "../../../components/user/UserWrapper";
import {
    EditOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import styles from "../../styles/settings.scss"


const Rewiews = ({user}) => {


    const {t} = useTranslation();
    const { TextArea } = Input;
    return (
        <div>
            <UserWrapper user={user}>
                <div className={styles.container}>
                    <h1>{t('settings.name')}</h1>
                    <Row>
                        <Col span={16}>
                            <Input
                                className={styles.input}
                                placeholder="Иван Костров"
                                suffix={<EditOutlined />}
                            />
                            <Row>
                                <Col span={18}>
                                    <h1>{t('settings.tags')}</h1>
                                </Col>
                                <Col span={6}>
                                    <div className={styles.edit}>
                                        <EditOutlined className={styles.editIcon}/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div className={styles.tags}>
                                        <span className={styles.tag}>Драма</span>
                                        <PlusCircleOutlined className={styles.icon} />
                                    </div>
                                    <div className={styles.tags}>
                                        <span className={styles.tag}>Спорт</span>
                                        <PlusCircleOutlined className={styles.icon} />
                                    </div>
                                    <div className={styles.tags}>
                                        <span className={styles.tag}>США</span>
                                        <PlusCircleOutlined className={styles.icon} />
                                    </div>
                                    <div className={styles.tags}>
                                        <span className={styles.tag}>Новинки</span>
                                        <PlusCircleOutlined className={styles.icon} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <div className={styles.newtags}>
                                        <span className={styles.newTag}>Ужасы</span>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className={styles.addTags}>
                                        <span className={styles.addTags}>+ еще 15 тегов</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <h1>{t('settings.about')}</h1>
                                    <TextArea
                                        placeholder={t('settings.aboutTexts')}
                                        rows={8}
                                        className={styles.textArea}
                                    />
                                    <button className={styles.btn}>{t('settings.save')}</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8}>
                            <Row>
                               <Col span={24}>
                                   <div className={styles.icons}>
                                       <img src="/images/icons/play.svg" alt=""/>
                                       <img src="/images/icons/instagram.svg" alt=""/>
                                       <img src="/images/icons/vk.svg" alt=""/>
                                   </div>
                               </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div className={styles.social}>
                                        <p>{t('settings.social')}</p>
                                    </div>
                                </Col>
                            </Row>
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

export default Rewiews;
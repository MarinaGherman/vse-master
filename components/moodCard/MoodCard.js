import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./MoodCard.module.scss";

const MoodCard = ({url, text}) => {
    const { t } = useTranslation();
    return (
        <div className={styles.card}>
            <img  src={url} alt=""/>
            <p>{text}</p>
            <h4 className={styles.orange}>{t('index.moodCard.card')}</h4>
        </div>
    );
};

export default MoodCard;
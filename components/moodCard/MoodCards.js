import React from 'react';
import MoodCard from "./MoodCard";
import styles from './MoodCards.module.scss';


const MoodCards = ({items}) => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.cardsSlide}>
                {items.map((card, i) => <MoodCard key={i} url={card.url} text={card.text} />)}
            </div>
        </div>
    );
};

export default MoodCards;


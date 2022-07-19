import React from 'react';
import Card from "./Card";
import styles from './Cards.module.scss';


const Cards = ({items}) => {

    return (
        <div className={styles.cardsContainer}>
            <div className={styles.cardsSlide}>
                {items.map((card, i) => <Card key={i} {...card}  />)}
            </div>
        </div>
    );
};

export default Cards;

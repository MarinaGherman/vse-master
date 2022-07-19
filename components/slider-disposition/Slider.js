import React, {useState} from 'react';
import styles from './Slider.module.scss';

const Slider = () => {

    const [cards] = useState([
        {
            "title": "пришел с работы",
            "url": "images/smiles/1.png"
        },
        {
            "title": "проснулся",
            "url": "images/smiles/2.png"
        },
        {
            "title": "выходной с семьей",
            "url": "images/smiles/3.png"
        },
        {
            "title": "вдвоем",
            "url": "images/smiles/4.png"
        },
        {
            "title": "не пошел на работу",
            "url": "images/smiles/5.png"
        },
        {
            "title": "приболел",
            "url": "images/smiles/6.png"
        },
        {
            "title": "после учебы",
            "url": "images/smiles/7.png"
        },
        {
            "title": "пришел с работы",
            "url": "images/smiles/1.png"
        },
        {
            "title": "проснулся",
            "url": "images/smiles/2.png"
        },
        {
            "title": "выходной с семьей",
            "url": "images/smiles/3.png"
        },
        {
            "title": "вдвоем",
            "url": "images/smiles/4.png"
        },
        {
            "title": "не пошел на работу",
            "url": "images/smiles/5.png"
        },
        {
            "title": "приболел",
            "url": "images/smiles/6.png"
        },
        {
            "title": "после учебы",
            "url": "images/smiles/7.png"
        },
    ]);

    return (
       <div
           className={styles.sliderContainer}

       >
           <div
               className={styles.slider}
           >
               {
                   cards.map((card, i) => (
                       <span key={i} className={styles.card}>
                        <img src={card.url} alt=""/>
                        <p>{card.title}</p>
                    </span>
                   ))
               }
           </div>
       </div>
    );
};

export default Slider;
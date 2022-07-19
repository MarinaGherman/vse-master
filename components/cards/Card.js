import React from 'react';
import Link from 'next/link';
import styles from "./Card.module.scss";

const Card = ({url, link}) => {
    return (
        <Link href={link}>
            <a>
                <div
                    className={styles.card}
                    style={{
                        backgroundImage: `url(${url})`
                    }}
                >
                    <div className={styles.icon}>
                        <div className={styles.orangeBlock}>
                            <img src="/images/common/icon.png" alt=""/>
                        </div>
                        <div className={styles.playIcon}>
                            <img src="/images/common/play.png" alt=""/>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;
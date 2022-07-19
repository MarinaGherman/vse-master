import React from 'react';
import {Row, Col} from "antd";
import styles from './PlatformCard.module.scss';

const PlatformCard = ({url, name, price}) => {
    return (
    <div className={styles.platformCard}>
        <Row>
            <p className={styles.title}>{name}</p>
        </Row>
        <Row>
            <Col span={24}>
                <img src={url} alt=""/>
            </Col>
        </Row>
        <p className={styles.price}> {price}</p>
    </div>


    );
};

export default PlatformCard;
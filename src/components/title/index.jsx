import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

export function TitleMoment({ dateCurrent, nameTutor, description, icon }) {
    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="day-hour">{dateCurrent}</div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <i className={icon}></i>
                    <div className="name-tutor">{nameTutor}</div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div className="description">{description}</div>
                </Col>
            </Row>
        </>
    )
}


export function TitleActivity({ dayHour, nameMoment, description, icon }) {
    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="day-hour">{dayHour}</div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div className="name-moment">
                        <i>{icon}</i>
                        <span>{nameMoment}</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div className="description-activity">{description}</div>
                </Col>
            </Row>
        </>
    )
}


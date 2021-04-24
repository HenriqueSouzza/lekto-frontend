
import React from 'react';
import { Row, Col, Card, Avatar, Image, Modal, Dropdown } from 'antd';
import { InfoCircleOutlined, PlusOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import BreadCrumbCustom from '../../../components/breadcrumb/index';
import Button from '../../../components/button/index';
import Icon from '../../../components/icon/index';
import './index.css';

export function HeaderOfTraking() {
    return (
        <div className="timer-and-end-moment-detail">
            <div className="common btn-timer-green">
                <Icon icon="icon-system---clock" /> <span>1:34</span>
            </div>
            <div className="common btn-malterials-activity-detail">
                <Button className="btn-green-gradient" icon={<Icon icon="icon-system---materiais" />} />
            </div>
            <div className="common">
                <Button
                    name={`|`}
                    className="btn-blue-gradient"
                    icon={
                        <>
                            <Icon icon="icon-system---microfone" />
                            <Icon icon="icon-system---camera" />
                            <Icon icon="icon-system---texto" />
                        </>
                    } />
            </div>
            <div className="common">
                <Button name="trocar atividade" className="btn-gray" icon={<CheckOutlined />} />
            </div>
        </div>
    )
}

export default function index(props) {

    const breadcrumbCustom = {
        icon: 'icon-system---arrow-left',
        path: 'Voltar'
    }

    return (
        <Row>
            <Col xs={8}>
                <Link to={`/home/` + props.match.params.moment + '/activity'}>
                    <BreadCrumbCustom {...breadcrumbCustom} />
                </Link>
            </Col>
            <Col xs={16}>
                <HeaderOfTraking />
            </Col>
        </Row>
    )
}
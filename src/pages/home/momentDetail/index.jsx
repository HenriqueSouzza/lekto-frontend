import React from 'react';
import { Row, Col, Button } from 'antd';
import { TitleActivity } from '../../../components/title/index';
import BreadCrumbCustom from '../../../components/breadcrumb/index';
import { InfoCircleOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.css';

export default function Index(props) {

    const title = {
        dayHour: 'hoje, 10h às 12h',
        nameMoment: 'Expressões',
        description: 'ESCOLA DO FUTURO • TURMA B • 3º ANO',
        icon: <InfoCircleOutlined />
    }

    const breadcrumbCustom = {
        icon: 'icon-system---arrow-left',
        path: 'Voltar'
    }

    return (
        <>
            <Link to={'/home'}>
                <BreadCrumbCustom {...breadcrumbCustom}/>
            </Link>
            <Row justify="space-around" align="middle">
                <Col span={18}>
                    <TitleActivity {...title} />
                </Col>
                <Col span={6}>
                    <div className="button-title-moment-detail">
                        <Button type={`primary`}>Editar</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

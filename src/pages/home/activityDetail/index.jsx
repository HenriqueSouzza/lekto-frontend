import React from 'react';
import { Row, Col, Breadcrumb, List, Avatar, Card, Button, Tooltip } from 'antd';
import { UserOutlined, InfoCircleOutlined, CheckCircleFilled } from '@ant-design/icons';
import './index.css';

export default function Index() {

    const titleTutor = (dateCurrent, nameTutor, description) => {
        return (
            <>
                <div className="date-current">{dateCurrent}</div>
                <div className="name-tutor">{nameTutor}</div>
                <div className="description">{description}</div>
            </>
        )
    }

    const dateList = [
        {
            title: titleTutor('19-04-2021', 'Olá, João!', 'Essas são os seus momentos programados para hoje'),
            avatar: 'https://w7.pngwing.com/pngs/124/934/png-transparent-computer-icons-person-avatar-heroes-black-avatar.png',
        },
    ];

    return (
        <>
            <Breadcrumb></Breadcrumb>
            <Row>
                <Col span={12}>
                    <List
                        itemLayout="horizontal"
                        dataSource={dateList}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={item.title}
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
            <br />
            <Card>
                <Row>
                    <Col span={12}>
                        <div className="time-class">08h às 09h20</div>
                        <div className="course">
                            <Avatar icon={<UserOutlined />} />
                            <span>Natureza</span>
                        </div>
                        <div className="course-description">ESCOLA DO FUTURO • 7º ANO • TURMA A</div>
                    </Col>
                    <Col span={12}>
                        <Row justify="end">
                            <Col>
                                <Button type="primary" icon={<CheckCircleFilled />}>asdads</Button>
                            </Col>
                        </Row><br />
                        <Row justify="end">
                            <Col>
                                <Avatar.Group maxCount={5} size="large">
                                    <Tooltip
                                        title={
                                            <>
                                                <div className="tooltip-title">Daniel Pereira</div>
                                                <div className="tooltip-description">
                                                    <InfoCircleOutlined/> <span>comunicador</span>
                                                </div>
                                            </>
                                        }
                                        placement="bottomLeft"
                                        color={"#FAFAFA"}>
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    </Tooltip>
                                </Avatar.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
import React from 'react';
import { Row, Col, Card, Avatar, Image, Modal, Dropdown } from 'antd';
import { TitleActivity } from '../../../components/title/index';
import BreadCrumbCustom from '../../../components/breadcrumb/index';
import Button from '../../../components/button/index';
import Icon from '../../../components/icon/index';
import { InfoCircleOutlined, PlusOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.css';


export function SkillsAssessed(props) {

    const { skills } = props

    const description = (count) => (
        <div className="skillAssessed-card">
            <span>DIMENSÃO</span>
            <div className="title-description">{skills[count].description.title}</div>
            <div className="text-description">
                <span>{skills[count].description.text}</span>
            </div>
        </div>
    )

    return (
        skills.map((skill, i) => (
            <Dropdown key={i + 1} overlay={description(i)} trigger={['click']}>
                <Button icon={<Icon icon={skill.icon} />} name={<span><b>{skill.title}</b> <DownOutlined /></span>} className="btn-pink name-button-custom" />
            </Dropdown>
        ))
    )

}

export function CardOfActivities({ students, StudentSuggested, descriptionTutor, skillsAssessed }) {

    const contentModal = () => {
        return (
            <>
                <div className="title-student-suggested-moment-detail">Você quer adicionar algum aprendiz?</div>
                <div className="students-card-moment-detail">
                    {StudentSuggested.map(student => (
                        <div>
                            <Avatar
                                size={77}
                                src={
                                    <Image
                                        preview={false}
                                        alt={``}
                                        src={student.image}
                                    />
                                }
                            />
                            <p>{student.name}</p>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    const openModalAddStudent = () => {
        return (
            Modal.confirm({
                icon: false,
                okText: "Concluir",
                className: "modal-student-suggested-moment-detail",
                content: contentModal(),
                closable: true,
                onOk() {
                    console.log();
                },
                onCancel() {
                    console.log('Cancel');
                },
            })
        )
    }

    return (
        <div className="card-activity-moment-detail">
            <Card>
                <Row>
                    <Col span={24}>
                        <span className="description-activity-tutor-moment-detail">{descriptionTutor}</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="students-card-moment-detail">
                            <div>
                                <Avatar
                                    size={77}
                                    onClick={() => openModalAddStudent()}
                                    className={"teste"}
                                    icon={<PlusOutlined />}
                                />
                                <p>Adicionar Aluno</p>
                            </div>
                            {students.map((student, i) => (
                                <div key={i + 1}>
                                    <Avatar
                                        size={77}
                                        src={
                                            <Image
                                                preview={false}
                                                alt={``}
                                                src={student.image}
                                            />
                                        }
                                    />
                                    <p>{student.name}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="description-activity-moment-detail">
                            <Link to={`/home/1/activity/1`}>
                                <span className="name-link-activity"> Bonecos autorretrato <Icon icon="icon-system---arrow-right" /></span>
                            </Link>
                            <div className="descrition-activity">
                                Construir um boneco de autorretrato com papel machê a partir da auto-observação
                                e reconhecimento de suas características físicas e de personalidade.
                                </div>
                            <div className="skills-assessed-activity">
                                <SkillsAssessed skills={skillsAssessed} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export function HeaderOfTraking() {
    return (
        <div className="timer-and-end-moment-detail">
            <div className="common">
                <Button name="encerrar" className="btn-green-gradient" icon={<CheckOutlined />} />
            </div>
            <div className="common btn-timer-green">
                <Icon icon="icon-system---clock"/> <span>1:34</span>
            </div>
        </div>
    )
}

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

    const dataCardOfActivities = {
        descriptionTutor: "João, esses são os alunos que estão presentes para esse card",
        students: [
            {
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                name: "joão prado"
            },
            {
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                name: "joão prado"
            },
        ],
        StudentSuggested: [
            {
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                name: "joão prado"
            },
            {
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                name: "joão prado"
            },
            {
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                name: "joão prado"
            },
            {
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                name: "joão prado"
            },
            {
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                name: "joão prado"
            },
            {
                image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                name: "joão prado"
            }
        ],
        skillsAssessed: [
            {
                title: 'Autoconhecimento',
                icon: 'icon-habilidades---autoconhecimento',
                description: {
                    title: 'Autoconsciência',
                    text: "Começa a construir sua identidade a partir do reconhececimento das suas características pessoais e interesses próprios. (EI02EF01)"
                }
            }
        ]
    }

    return (
        <>
            <Row>
                <Col xs={12}>
                    <Link to={'/home'}>
                        <BreadCrumbCustom {...breadcrumbCustom} />
                    </Link>
                </Col>
                <Col xs={12}>
                    <HeaderOfTraking />
                </Col>
            </Row>
            <Row justify="space-around" align="middle">
                <Col span={18}>
                    <TitleActivity {...title} />
                </Col>
                <Col span={6}>
                    <div className="button-title-moment-detail">
                        <Button name="Editar" icon={<Icon icon="icon-system---editar-filled" />} className="btn-gray" />
                    </div>
                </Col>
            </Row>
            <CardOfActivities {...dataCardOfActivities} />
            <Row justify={`center`}>
                <Col xs={24}>
                    <Button name="Iniciar" className="btn-green btn-iniciar-moment-detail" icon={<Icon icon='icon-system---play' />} />
                </Col>
            </Row>
        </>
    )
}

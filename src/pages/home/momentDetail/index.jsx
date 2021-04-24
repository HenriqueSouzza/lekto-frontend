import React from 'react';
import { Row, Col, Button, Card, Avatar, Image, Modal } from 'antd';
import { TitleActivity } from '../../../components/title/index';
import BreadCrumbCustom from '../../../components/breadcrumb/index';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.css';
import Icon from '../../../components/icon';


export function CardOfActivities({ students, StudentSuggested, descriptionTutor }) {

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
                                <Link to="">
                                    <span className="name-link-activity"> Bonecos autorretrato <Icon icon="icon-system---arrow-right" /></span>
                                </Link>
                                <div className="descrition-activity">
                                    Construir um boneco de autorretrato com papel machê a partir da auto-observação
                                    e reconhecimento de suas características físicas e de personalidade.
                                </div>
                                <div className="skills-assessed-activity">
                                   aasdads
                                   asdaasasd
                                </div>
                            </div>
                    </Col>
                </Row>
            </Card>
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
        ]
    }

    return (
        <>
            <Link to={'/home'}>
                <BreadCrumbCustom {...breadcrumbCustom} />
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
            <CardOfActivities {...dataCardOfActivities} />
        </>
    )
}

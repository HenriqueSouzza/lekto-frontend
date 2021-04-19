import React from 'react';
import { Form, Input, Button, Image, Typography, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo_lekto.png';
import './index.less';

const { Text } = Typography;

export default function Auth() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row justify="space-around" align="middle">
        <Col xs={8}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>

            <Row justify="center">
              <Col>
                <Image
                  width={100}
                  className="logo-login"
                  src={Logo}
                  preview={false}
                />
              </Col>
            </Row>

            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              placeholder="senha"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{width: '100%'}} size="large">
                ENTRAR
              </Button>
            </Form.Item>

            <Form.Item>
              <Link to={"#"}>
                <Text className="text-forgot-my-password" underline>Esqueci minha senha</Text>
              </Link>
            </Form.Item>

          </Form>
        </Col>
      </Row>
    </>
  )
}

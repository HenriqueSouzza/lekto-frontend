import React from 'react';
import { Form, Input, Image, Typography, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../assets/images/logo_white.png';
import ImageBoy from '../../assets/images/image_boy.png';
import ImageCircle from '../../assets/images/image_circle.png';
import './index.css';
import Button from '../../components/button/index';

const { Text } = Typography;

export function OAuth0() {
  const { loginWithRedirect } = useAuth0();

  return loginWithRedirect()
}


export function Auth() {

  const onFinish = (values) => {
    console.log(values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="body-auth">
      <Row justify="space-around" align="middle">
        <div className="login-image">
          <div className="login-image-boy">
            <Image
              preview={false}
              width={500}
              src={ImageBoy}
            />
          </div>
          <div className="login-image-circle">
            <Image
              preview={false}
              width={400}
              src={ImageCircle}
            />
          </div>
        </div>
        <div className="login-content-form">
          <Col xs={24}>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>

              <Row justify="center">
                <Col>
                  <Image
                    width={206}
                    className="logo-login"
                    src={Logo}
                    preview={false}
                  />
                </Col>
              </Row>
              <br />
              <Form.Item
                name="username"
                className="form-item-custom"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                className="form-item-custom"
                placeholder="senha"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>
              <Form.Item
                className="form-item-custom">
                <Button
                  htmlType="submit"
                  className={`btn-yellow btn-login`}
                  size="large"
                  name="ENTRAR"
                />
              </Form.Item>
              <Form.Item
                className="form-item-custom">
                <Link to={"#"}>
                  <Text className="text-forgot-my-password" underline>Esqueci minha senha</Text>
                </Link>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </Row>
    </div>
  )
}
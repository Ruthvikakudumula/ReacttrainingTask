import { Button, Form, Input, Spin } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
height: 500px;
width: 400px;
` ;
const FormItem = Form.Item;
const SignUp = () => {
    const naviagte = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        naviagte('/movies');
      } else {
        alert(response.statusText);
      }
    } catch (error) {}

    setLoading(false);
  };

    return (
        <Container>
          {loading ? (
            <Spin spinning={loading} />
          ) : (
            <Form onFinish={login} name="login-form">
              <FormItem name="username" label="User Name">
                <Input />
              </FormItem>
              <FormItem name="password" label="Password">
                <Input type="password" />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </FormItem>
            </Form>
          )}
        </Container>
      );
}
export default SignUp;
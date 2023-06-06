import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "85%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled(Link)`
  width: fit-content;
  align-items: center;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const SmallLink = styled(Link)`
  font-size: 12px;
  font-family: "Times New Roman", Times, serif;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button to="/">LOGIN</Button>
          <SmallLink>DO NOT YOU REMEMBER THE PASSWORD?</SmallLink>
          <SmallLink to="/register">CREATE A NEW ACCOUNT</SmallLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

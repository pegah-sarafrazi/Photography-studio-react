import React from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
  Form,
} from "./signinElements";

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to you account</FormH1>
            <FormLabel htmlfor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlfor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">continue</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;

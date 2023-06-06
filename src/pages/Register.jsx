import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
    url("https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=411&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
`;


const Input = styled.input`
  flex: 1 1 100%;

  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ width: "100%" })}
`;

const TextArea = styled.textarea`
  flex: 1 1 95%;

  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ width: "100%" })}
`;

const Select = styled.select`
  flex: 1 1 95%;

  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ width: "100%" })}
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  align-self: flex-start;
  margin-top: 20px;
  text-align: left;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
`;

const AgreementText = styled.span`
  margin-left: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled(Link)`
  width: 45%;
  border: none;
  align-items: center;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const CreateButton = styled(Button)`
  background-color: teal;
`;

const BackButton = styled(Button)`
  background-color: gray;
`;

const RequiredInput = styled(Input)`
  border: 1px solid red;
`;

const RequiredSelect = styled(Select)`
  border: 1px solid red;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>I'm a new customer</Title>
        <Form>
          <>
          <RequiredSelect>
            <option value="">Salutation*</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </RequiredSelect>
          <RequiredInput placeholder="First Name*" />
          <RequiredInput placeholder="Last Name*" />
          <RequiredInput placeholder="Email Address*" />
          <Input placeholder="Password" />
          <RequiredInput placeholder="Mobile*" />

          <H2>Company</H2>
          <Input placeholder="Company Name" />
          <Input placeholder="Department" />
          <p>This VAT-No. is valid until recall for all further orders.</p>
          <Input placeholder="VAT ID" />

          <H2>Brands you need to order</H2>
          <TextArea placeholder="Brands" rows={4} />

          <Input placeholder="Contact sales" />
          <Input placeholder="Contact accounting" />

          <Label>
            <input type="checkbox" />
            Invoicing by email
          </Label>

          <Input placeholder="Email accounting" />
          <Input placeholder="Tel-Number" />
          <Input placeholder="Fax Number" />
          <Input placeholder="Mobile" />
          <Input placeholder="Website" />
          <Input placeholder="Shipping Method" />
          <Input placeholder="Account Number" />

          <H2>Your Address</H2>
          <Input placeholder="Street and Number" />
          <Input placeholder="Zip code" />
          <Input placeholder="City" />
          <Select>
            <option value="">Country</option>
            {/* Add country options here */}
          </Select>

          <Label>
            <input type="checkbox" />
            The shipping address does not match the billing address
          </Label>

          {/* Hidden fields */}
          <RequiredSelect>
            <option value="">Salutation*</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </RequiredSelect>
          <RequiredInput placeholder="First Name*" />
          <RequiredInput placeholder="Last Name*" />
          <Input placeholder="Company" />
          <Input placeholder="Department" />

          <Input placeholder="Street and Number" />
          <Input placeholder="Zip code" />
          <Input placeholder="City" />
          <Select>
            <option value="">Country</option>
            {/* Add country options here */}
          </Select>
          {/* End of hidden fields */}

          <p>The fields marked with * are required</p>
          </>

          
        </Form>
        <H2>Privacy</H2>
          <Agreement>
            <input type="checkbox" />
            <AgreementText>
              I have read the data protection information in <b>PRIVACY POLICY</b>
            </AgreementText>
          </Agreement>

          <ButtonWrapper>
            <CreateButton to="/login">CREATE</CreateButton>
            <BackButton to="/login">LOGIN</BackButton>
          </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Register;

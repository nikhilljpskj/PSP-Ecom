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
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const Input = styled.input`
  flex: 1 1 45%;
  width: 500px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const TextArea = styled.textarea`
  flex: 1 1 95%; 
  width: 500px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Select = styled.select`
  flex: 1 1 45%;
  width: 525px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  align-self: flex-start;
  margin-top: 20px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled(Link)`
  width: 30%;
  border: none;
  align-items: center;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  text-decoration: none;
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
          <div>
            <H2>Company</H2>
            <Input placeholder="Company Name" />
            <Input placeholder="Department" />
            <p>This VAT-No. is valid until recall for all further orders.</p>
            <Input placeholder="VAT ID" />
          </div>
          <div>
            <H2>Brands you need to order</H2>
            <TextArea placeholder="Brands" rows={4} />
          </div>
          <div>
            <Input placeholder="Contact sales" />
            <Input placeholder="Contact accounting" />
          </div>
          <div>
            <Label>
              <input type="checkbox" />
              Invoicing by email
            </Label>
          </div>
          <div>
            <Input placeholder="Email accounting" />
            <Input placeholder="Tel-Number" />
            <Input placeholder="Fax Number" />
            <Input placeholder="Mobile" />
            <Input placeholder="Website" />
            <Input placeholder="Shipping Method" />
            <Input placeholder="Account Number" />
          </div>
          <div>
            <H2>Your Address</H2>
            <Input placeholder="Street and Number" />
            <Input placeholder="Zip code" />
            <Input placeholder="City" />
            <Select>
              <option value="">Country</option>
              {/* Add country options here */}
            </Select>
          </div>
          <div>
            <Label>
              <input type="checkbox" />
              The shipping address does not match the billing address
            </Label>
          </div>
          {/* Hidden fields */}
          <div>
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
          </div>
          {/* End of hidden fields */}
          <p>The fields marked with * are required</p>
          <div>
            <H2>Privacy</H2>
            
            <Agreement>
            <input type="checkbox" />
            I have read the data protection information in <b>PRIVACY POLICY</b>
            </Agreement>
          </div>
          <Button to="/login">CREATE</Button>
          <Button to="/login"> Back To Login  </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

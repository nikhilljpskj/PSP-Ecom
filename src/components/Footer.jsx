import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ alignItems: "center" })}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  ${mobile({ fontSize: "20px" })}
`;

const Desc = styled.p`
  margin: 20px 0;
  text-align: center;
  font-size: 14px;
  ${mobile({ fontSize: "12px" })}
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  display: none;
  ${mobile({ display: "block", textAlign: "center", margin: "20px 0" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 16px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled(Link)`
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
  font-size: 14px;
  ${mobile({ fontSize: "12px" })}
`;

const Right = styled.div`
  padding: 20px;
  background-color: #fff8f8;
  ${mobile({ padding: "10px" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 15px;
  ${mobile({ marginBottom: "10px" })}
`;

const Payment = styled.img`
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DEE</Logo>
        <Desc>Online E-commerce platform for DEE</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem to="/">Home</ListItem>
          <ListItem to="/cart">Cart</ListItem>
          <ListItem to="/mens_wear">Man Fashion</ListItem>
          <ListItem to="/girls_wear">Woman Fashion</ListItem>
          <ListItem to="/kids_wear">Kids Fashion</ListItem>
          <ListItem to="/">My Account</ListItem>
          <ListItem to="/">Order Tracking</ListItem>
          <ListItem to="/">Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          DEE Thiruppur Tamil Nadu
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 89216 52221
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          dee@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

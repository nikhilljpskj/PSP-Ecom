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
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: ${mobile({ fontSize: "24px", marginBottom: "10px" })};
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: ${mobile({ fontSize: "14px" })};
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center", marginBottom: "20px" })}
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
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: ${mobile({ fontSize: "16px", marginBottom: "20px" })};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  ${mobile({ width: "100%", display: "flex", justifyContent: "center" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: ${mobile({ fontSize: "14px" })};
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
        <Desc>Online E-com platform for DEE</Desc>
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
          <ListItem to="/">
            <b>Home</b>
          </ListItem>
          <ListItem to="/cart">
            <b>Cart</b>
          </ListItem>
          <ListItem to="/mens_wear">
            <b>Man Fashion</b>
          </ListItem>
          <ListItem to="/girls_wear">
            <b>Woman Fashion</b>
          </ListItem>
          <ListItem to="/kids_wear">
            <b>Kids Fashion</b>
          </ListItem>
          <ListItem to="/">
            <b>My Account</b>
          </ListItem>
          <ListItem to="/">
            <b>Order Tracking</b>
          </ListItem>
          <ListItem to="/">
            <b>Wishlist</b>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          <span>DEE Thiruppur Tamil Nadu</span>
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          <span>+91 89216 52221</span>
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          <span>dee@gmail.com</span>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;


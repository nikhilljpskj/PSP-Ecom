import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2; 
  justify-content: space-between;
`;

const ContentContainer = styled.div`
 
  padding: 20px;
  margin-bottom: 20px;
`;

const StyledText = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  border: none;
  padding: 10px;
  background-color: lightgreen;
  color: white;
  cursor: pointer;
  font-weight: 600;
  margin: 0 auto;
  display: block;
`;

const Products = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <Container>
      <ContentContainer>
        <h1 style={{ textAlign: "center" }}>Product and Services</h1>
        <StyledText>
          Welcome to our online store, where convenience meets style and fashion is just a click away. We take pride in offering a diverse range of clothing products to suit every taste, occasion, and budget. Explore our wide selection of clothing categories, filled with trendy and timeless pieces, from everyday essentials to glamorous statement pieces. Our e-commerce platform showcases products from renowned brands and emerging designers, ensuring the highest quality and the latest fashion trends. With a user-friendly interface and intuitive navigation, shopping with us is a breeze. Enjoy a seamless experience, with detailed product descriptions and high-resolution images that help you make informed decisions. Rest assured, quality is our top priority, and our friendly support team is always ready to assist you.
        </StyledText>
        {!showFullContent && (
          <StyledButton onClick={handleToggleContent}>
            Read More
          </StyledButton>
        )}
      </ContentContainer>
      {showFullContent && (
        <ContentContainer>
          <StyledText>
            {"\n\n"}
            Experience the joy of online clothing shopping at our e-commerce platform. Discover a world of fashion with our extensive collection, from sophisticated and elegant looks to bold and edgy styles. We offer something for everyone, whether you're searching for stylish tops, fashionable dresses, trendy bottoms, cozy outerwear, or stylish accessories. Embrace fashion without compromising on comfort or longevity. With exceptional customer service and a commitment to your satisfaction, we strive to make your shopping experience memorable and enjoyable. Start exploring now and let us be your go-to destination for all your fashion needs.
          </StyledText>
          <StyledButton onClick={handleToggleContent}>
            Show Less
          </StyledButton>
        </ContentContainer>
      )}
    </Container>
  );
};

export default Products;

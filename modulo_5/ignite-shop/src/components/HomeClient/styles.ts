import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden; /* Remove rolagem horizontal */
    font-family: Arial, sans-serif;
  }
`;

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  margin: 0 auto;
  min-height: 656px;
  overflow: hidden; 
`;

export const SwiperStyles = styled.div`
  .swiper {
    width: 100%; 
    max-width: 1200px;
    margin: 0 auto; 
    height: auto;
    overflow: hidden; 
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 350px;
    height: auto;
  }
`;

export const Product = styled.div`
  background: linear-gradient(180deg, #1ea483 0%, #7475d4 100%);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; 
  max-width: 350px; 
  height: auto;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateY(110%);
    opacity: 0;
    transition: all 0.3s ease-in-out;

    strong {
      font-size: ${({ theme }) => theme.fontSizes.lg || "1rem"};
      color: ${({ theme }) => theme.colors.white || "#fff"};
    }

    span {
      font-size: ${({ theme }) => theme.fontSizes.xl || "1.5rem"};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.green300 || "#1ea483"};
    }
  }

  &:hover {
    footer {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

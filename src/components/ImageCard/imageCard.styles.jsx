import styled from "styled-components";

export const CardFooter = styled.div`
  height: 50px;
  position: absolute;
  bottom: 0;
  display: none;
  width: 346px;
  margin: 0 20px;
`;

export const ImageCardContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 7px;
  position: relative;
  color: white;
  background-image: url(${(props) => props.image.url});

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    background-color: black;
    ${CardFooter} {
      display: block;
    }
  }
`;

export const CardData = styled.div`
  display: flex;
  align-items: center;

  div:last-of-type {
    width: 5%;
  }
`;

export const Author = styled.div`
  width: 94%;
`;

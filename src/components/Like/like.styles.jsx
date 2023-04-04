import styled from "styled-components";

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;

  @media screen and (max-width: 480px) {
    height: auto;
  }
  h1 {
    font-size: 4.5rem;
  }
`;

export const HeartLikeButton = styled.div`
  position: relative;
  width: 16px;
  height: 13px;
  &::before {
    position: absolute;
    top: -6px;
    left: 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    width: 12px;
    height: 18.75px;
    border-radius: 40px 40px 0 0;
    background-color: white;
    content: "";
    cursor: pointer;
    transition: background 0.4s;
  }
  &::after {
    position: absolute;
    top: -6px;
    left: -11px;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    width: 12px;
    height: 18.75px;
    border-radius: 40px 40px 0 0;
    background-color: white;
    content: "";
    cursor: pointer;
    transition: background 0.4s;
  }

  &.liked::before,
  &.liked::after {
    background-color: #d65076;
  }
  &.liked {
    animation: liked 0.4s ease;
  }
  @keyframes liked {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

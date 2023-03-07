import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  p {
    width: 100vw;
    text-align: center;
    color: white;
    font-size: 50px;
    margin-top: 30px;
  }
  @media (max-width: 640px) {
  }
`;

export const BtnMore = styled.button`
  cursor: pointer;
  width: 20%;
  height: 10%;
  padding: 30px;

  background-color: red;
  color: white;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-family: "Passion One", cursive;
`;

export const BtnP = styled.p`
  display: flex;
  justify-content: center;
`;

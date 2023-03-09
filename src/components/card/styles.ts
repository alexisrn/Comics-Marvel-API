import styled from "styled-components";

export const Container = styled.div`
  width: 15%;
  height: 50%;
  border-radius: 6px;
  background-color: rgba(26, 26, 26, 0.6);
  opacity: 80%;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;

  border: 2px solid transparent;
  &:hover {
    opacity: 100%;
    border: 2px solid #fefefe;
    cursor: pointer;
  }
  @media (max-width: 799px) {
    width: 10%;
    height: 30%;
  }

  @media (max-width: 680px) {
    width: 80%;
    height: 80%;
  }
`;

export const ImgCtn = styled.div`
  height: 88%;
  img {
    transition: all 0.3s ease-in-out;

    width: 100%;
    height: 100%;
  }
  img:hover {
    transform: scale(1.3);
  }
`;

export const Text = styled.div`
  text-align: center;

  span {
    font-size: 13px;
  }

  @media (max-width: 680px) {
    padding-top: 10px;
    p {
      font-size: 23px;
    }
  }
`;

/* 


 width: 20%;
  height: 60%;
  border: 3px solid grey;
  background-color: ;
  border-radius: 6px;

  overflow: hidden;

  position: relative;

  transition: all 0.3s ease-in-out;

  border: 2px solid transparent;

  section {
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    img {
      width: 100%;
      height: 90%;
    }
    img:hover {
    }
    span {
      background-color: rgba(0, 0, 0, 0.6);
      font-size: 18px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }






 .card-comic {
    height: 350px;
    width: 250px;
    margin: 10px;

    border-radius: 6px;

    overflow: hidden;

    position: relative;

    transition: all 0.3s ease-in-out;

    border: 2px solid transparent;

    &:hover {
      border: 2px solid #fefefe;
      cursor: pointer;

      .card-comic__image {
        transform: scale(1.2);
      }
    }
  }

  .card-comic__image {
    width: 100%;
    height: 100%;

    transition: all 0.3s ease-in-out;
  }

  .card-comic__info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 18px;
  }

  &:hover {
    cursor: pointer;
  }




 






*/

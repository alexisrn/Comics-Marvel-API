import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("http://trumpwallpapers.com/wp-content/uploads/Marvel-Wallpaper-04-3840-x-2160.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -1px -200px;

  img {
    width: 12%;
    padding: 100px;
  }

  p {
    padding: 100px;
  }
  @media (max-width: 840px) {
    background-image: none;

    display: flex;
    align-items: center;

    padding: 0 0px;
    img {
      display: none;
    }
  }

  input {
    height: 40px;

    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
    border-right: none;
    border-radius: 10px 0 0 10px;
    background-color: rgba(0, 0, 0, 0.5);

    color: white;
    font-size: 16px;
    font-family: "Passion One", cursive;
  }

  button {
    height: 40px;
    border-left: none;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-top: 2px solid grey;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 10px 10px 0;
    color: white;

    span {
      cursor: pointer;
      padding: 10px;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const CtnMbl = styled.div`
  width: 100%;
  input {
    width: 85%;
    height: 50px;
    color: white;
    font-size: 15px;
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
    border-right: none;
    border-radius: 10px 0 0 10px;
    background-color: rgba(0, 0, 0, 0.5);
    font-family: "Passion One", cursive;
  }
  button {
    width: 15%;
    height: 50px;
    border-left: none;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-top: 2px solid grey;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 10px 10px 0;
    color: white;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

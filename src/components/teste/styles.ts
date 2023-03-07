import styled from "styled-components";

export const Ctn = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap");

  * {
    margin: 0;
    padding: 0;
    font-family: "poppins", sans-serif;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/001/944/116/original/red-fire-smoke-with-flying-particle-embers-looping-background-free-video.jpg");
  background-color: red;
  width: 100%;
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 30px;
    flex-wrap: wrap;
  }
  .container .card {
    cursor: pointer;
    position: relative;
    width: 400px;
    height: 400px;
    margin: 20px;
    overflow: hidden;
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    align-items: center;
    justify-content: center;
  }
  .container .card .contentbox {
    position: absolute;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    flex-direction: column;
    backdrop-filter: blur(15px);
    bottom: -400px;
    box-shadow: 0 -10px 10px rgb(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: bottom 0.5s;
    transition-delay: 0.1s;
  }
  .container .card:hover .contentbox {
    bottom: 0;
  }
  .container .card .contentbox .contentDP h3 {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin: 30px 0 15px;
    line-height: 1.1em;
    transition: 0.5s;
    transform: translateY(-20px);
    transition-delay: 0.6s;
    opacity: 0;
  }
  .container .card:hover .contentbox .contentDP h3 {
    opacity: 1;
    transform: translateY(0px);
  }
  .container .card .contentbox .contentDP h3 span {
    font-size: 12px;
    font-weight: 300;
    text-transform: initial;
    text-transform: uppercase;
  }
  .container .card .contentbox .social {
    display: flex;
    position: relative;
    bottom: 10px;
  }
  .container .card .contentbox .social li {
    list-style: none;
    margin: 0 10px;
    transform: translateY(40px);
    transition: 0.5s;
    opacity: 0;
    transition-delay: calc(0.2s * var(--q));
  }
  .container .card:hover .contentbox .social li {
    transform: translateY(0px);
    opacity: 1;
  }
  .container .card .contentbox .social li a {
    color: #fff;
    font-size: 24px;
  }
  img {
    width: 100%;
    height: 400px;
  }
`;

export const Text = styled.span`
  width: 100%;
  text-align: center;
  color: red;
  font-size: 50px;
`;

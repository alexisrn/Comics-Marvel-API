import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { Card } from "../../components/card";
import Header from "../../components/header";
import marvelApi from "../../service/MarvelApi";

interface RespoData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extesion: string;
  };
}

const Home: React.FC = () => {
  const [comics, setComics] = useState<RespoData[]>([]);

  useEffect(() => {
    marvelApi
      .get("./comics")
      .then((res) => {
        setComics(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const res = await marvelApi.get("comics", {
        params: {
          offset,
        },
      });
      setComics([...comics, ...res.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [comics]);

  return (
    <>
      <Header />
      <S.Container>
        {comics.map((comic, index) => {
          return <Card data={comic} key={index} />;
        })}
        <S.BtnMore onClick={handleMore}>More Comics</S.BtnMore>
      </S.Container>
    </>
  );
};

export default Home;

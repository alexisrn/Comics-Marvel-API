import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { Card } from "../../components/card";
import Header from "../../components/header";
import marvelApi from "../../service/MarvelApi";
import { Loading } from "../../components/loading";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    marvelApi
      .get("./comics")
      .then((res) => {
        setComics(res.data.data.results);
        setLoading(true);
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
        {loading ? (
          comics.map((comic, index) => {
            return <Card data={comic} key={index} />;
          })
        ) : (
          <Loading />
        )}

        <S.BtnMore onClick={handleMore}>More Comics</S.BtnMore>
      </S.Container>
    </>
  );
};

export default Home;

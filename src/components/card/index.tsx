import * as S from "./styles";

export const Card = ({ data }: any) => {
  return (
    <>
      <S.Container>
        <S.ImgCtn>
          <img
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt=""
          />
        </S.ImgCtn>
        <S.Text>
          <p>{data.title}</p>
        </S.Text>
      </S.Container>
    </>
  );
};

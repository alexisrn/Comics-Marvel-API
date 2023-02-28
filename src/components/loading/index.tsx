import * as S from "./styles";

export const Loading = (props: any) => {
  return (
    <>
      <S.Container>
        <div className="lds-dual-ring"></div>
      </S.Container>
    </>
  );
};

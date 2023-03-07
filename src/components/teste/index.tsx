import * as S from "./styles";

const Teste = () => {
  return (
    <>
      <S.Ctn>
        <div className="container">
          <S.Text>Choose your way</S.Text>
          <div className="card">
            <div className="imgProfile">
              <img
                src="https://hqrock.files.wordpress.com/2019/01/marvel-comics-character-burst-i28458.jpg?w=709"
                alt=""
              />
            </div>
            <div className="contentbox">
              <div className="contentDP">
                <h3>Comics</h3>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="imgProfile">
              <img src="https://res.cloudinary.com/dragonspell/w_480,h_480,c_fill,g_auto,dpr_auto,fl_progressive:steep/event-images/localist-images.azureedge.net/photos/41597903791954/original/738aaeb1396bcf906eae62c74022c27d7e386da4.jpeg" />
            </div>
            <div className="contentbox">
              <div className="contentDP">
                <h3>Heroes</h3>
              </div>
            </div>
          </div>
        </div>
      </S.Ctn>
    </>
  );
};
export default Teste;

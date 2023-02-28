import * as S from "./styles";
import MarvelLogo from "../../assets/marvel-logo.png";
import { useState } from "react";
import search from "../../service/MarvelApi";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  const [text, setText] = useState("");

  const onSearch = (q: any) => {
    setText(q);
    search(q);
  };

  return (
    <>
      <S.Container>
        <p>
          <input
            type="search"
            placeholder="Search Comics"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button>
            <span>
              <BiSearchAlt />
            </span>
          </button>
        </p>
      </S.Container>

      <S.CtnMbl>
        <input type="search" placeholder="  Search Marvel Comics" />
        <button>
          <BiSearchAlt />
        </button>
      </S.CtnMbl>
    </>
  );
};

export default Header;

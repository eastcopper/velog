import React, { useRef } from "react";
import * as S from "./styles";
import logo from "../../asset/velog.png";
import search from "../../asset/search.png";
import arrow from "../../asset/stock.png";
import clock from "../../asset/clock.png";
import gsap from "gsap";

export default function Header() {

  const el = useRef();
  const q = gsap.utils.selector(el);
  
  function leftMove() {
    gsap.to(q(".line"), { x: 0 });
  }

  function rightMove() {
    gsap.to(q(".line"), { x: 110 });
  }

  return (
    <S.HeaderDiv ref={el}>
      <div className="top">
        <span>
          <img src={logo} alt="" className="logo" />
        </span>
        <span>
          <img src={search} alt="" className="search" />
          <button className="login">로그인</button>
        </span>
      </div>
      <div className="bottom">
        <button onClick={leftMove}>
          <img src={arrow} alt="" className="tranding" />
          <span>트렌딩</span>
        </button>
        <button onClick={rightMove}>
          <img src={clock} ait="" className="latest" />
          <span>최신</span>
        </button>
      </div>
        <hr width="100px" className="line" />
    </S.HeaderDiv>
  );
}

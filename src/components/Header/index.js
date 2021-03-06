import React, { useRef } from "react";
import * as S from "./styles";
import logo from "../../asset/velog.png";
import search from "../../asset/search.png";
import arrow from "../../asset/stock.png";
import clock from "../../asset/clock.png";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Header({ change, title }) {
  const el = useRef();
  const q = gsap.utils.selector(el);

  function move(value) {
    gsap.to(q(".line"), { x: value });
  }

  return (
    <S.HeaderDiv ref={el}>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
          <span className="mainTitle">
            {change ? "" : <img src={logo} alt="" />}
            <span>{title}</span>
          </span>
        </Link>
        <span>
          <span className="search">
            <img src={search} alt="" />
          </span>
          <button className="login">로그인</button>
        </span>
      </div>
      {change ? (
        <>
          <div className="bottom">
            <button onClick={() => move(0)}>
              <img src={arrow} alt="" className="tranding" />
              <span>트렌딩</span>
            </button>
            <button onClick={() => move(110)}>
              <img src={clock} ait="" className="latest" />
              <span>최신</span>
            </button>
          </div>
          <hr width="100px" className="line" />
        </>
      ) : (
        ""
      )}
    </S.HeaderDiv>
  );
}

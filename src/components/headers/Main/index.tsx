import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Helmet } from "react-helmet";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Images } from "../../../utils/assets"

import {
  ScrollPostitionType
} from "../../../@types";
import {
  MainHeaderWrapper
} from "./styled";

let startPosY: number = 0;

const MainHeader: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [linkList, setLinkList] = useState<Array<any>>([
    {
      title: "Busse erhalten?",
      path: "/busse-erhalten",
    },
    {
      title: "Unsere Lösung",
      path: "/unsere-losung",
    },
    {
      title: "Zusammenarbeit starten / Kontakt",
      path: "/kontakt",
    },
  ]);

  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [stickyBar, setStickyBar] = useState<boolean>(false);
  const [toggleStatus, setToggleSetatus] = useState<boolean>(false);
  useScrollPosition(({ prevPos, currPos }: ScrollPostitionType) => {
    if (Math.abs(currPos.y) > 60) {
      setStickyBar(true);
      setToggleSetatus(false);
    } else {
      setToggleSetatus(false);
      setStickyBar(false);
    }
  });

  const toggleMenu = () => {
    setToggleSetatus(!toggleStatus);
  }

  return (
    <MainHeaderWrapper className={`navbar ${stickyBar ? "sticky-bar" : "normal-bar"} ${toggleStatus ? "open" : ""}`}>
      <div className="content">
        <div
          className="toggle-btn"
          onClick={toggleMenu}
        >
          <svg width="31" height="17" viewBox="0 0 31 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1" x2="30.9899" y2="1" stroke="#fff" strokeWidth="2"/>
          <line y1="8.15234" x2="30.9899" y2="8.15234" stroke="#fff" strokeWidth="2"/>
          <line y1="15.8984" x2="30.9899" y2="15.8984" stroke="#fff" strokeWidth="2"/>
          </svg>
        </div>
        <div className="logo">
          <a href="/">
            {!stickyBar
              ? <img src={Images.WhiteLogoUrl} />
              : <img src={Images.DarkGrayLogoUrl} />
            }
          </a>
        </div>
        <div className="control">
          {/*<div className="func"><button>Busse erhalten?</button></div>*/}
          <ul className="menu">
          
          {linkList.map((data, index) =>
            <li key={index} className={`${index === 0 ? "btn" : "" } ${(data.path === location.pathname) ? "active" : ""}`}>
              <Link to={data.path}>{data.title}</Link>
            </li>
          )}
          </ul>
        </div>
        
      </div>
    </MainHeaderWrapper>
  )
};

export default MainHeader;        
import React from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiUserCircle, BiGitPullRequest } from "react-icons/bi";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaUserLock } from "react-icons/fa";
import { IoImagesOutline } from "react-icons/io5";
import {
  AiFillSetting,
  AiOutlineControl,
  AiOutlineDown,
  AiOutlineMenuUnfold,
  AiOutlineUp,
} from "react-icons/ai";
import { RiListSettingsFill, RiVisaFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";

const SideBar = ({ responsive, setResponsive }: any) => {
  const [accordin, setAccordin] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState<any>();

  const navList = [
    {
      id: 0,
      icon: MdSpaceDashboard,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 1,
      icon: BiUserCircle,
      title: "Post new load",
      path: "/new-load",
    },

    {
      id: 2,
      icon: FaUserLock,
      title: "My loads",
      path: "/my-load",
    },
    {
      id: 3,
      icon: BiGitPullRequest,
      title: "Transaction",
      path: "/transaction",
    },
  ];

  let Logo = require("../../assets/images/mainImage.png");

  return (
    <div className={"flex__column sidebar__container "}>
      <div className={"sidebar__logo flex "}>
        <img src={Logo} alt="hero" />{" "}
        <span className="ml-3 text-xl mt-3">
          {" "}
          <span style={{ color: "#274AD8" }}>Load</span>
          <span style={{ color: "#EC4A47" }}>Nepal</span>
        </span>
      </div>

      {navList.map((e) => (
        <NavLink
          to={e.path}
          key={e.id}
          className="flex items-center sidebar__list"
        >
          {<e.icon size={20} />}

          <span className={`${"sidebar__list__text"}`}>{e.title}</span>
        </NavLink>
      ))}
      <NavLink to={"/support"} className="flex items-center sidebar__list" style={{marginTop:'200px'}}>
        <FaUserLock size={20} />

        <span className={`${"sidebar__list__text"}`}>Support</span>
      </NavLink>
    </div>
  );
};

export default React.memo(SideBar);

import React from "react";
import { AiFillCaretDown, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../container/dashboardLayout";

const NavBar = () => {
  const [displayBlock, setDisplayBlock] = React.useState<any>(false);
  const navigate = useNavigate();
  const routes = window.location.pathname;


  return (
      <div className={"navbar__container"}>
        <div className="flex__justify__btwn">
          <div className="">{routes}</div>
          <div className="profile__container">
            <div className="admin_image flex">
              <span>
                <AiOutlineBell />
              </span>

              <span className="pe-3 profile__text">
                <AiOutlineUser />{" "}
              </span>

              <span onClick={() => setDisplayBlock(!displayBlock)}>
                <AiFillCaretDown />
              </span>
            </div>

            <div
              className={`navbar__dropdown  ${
                displayBlock ? "navbar__dropdown__block" : ""
              }`}
            >
              <span>Sabin Maharjan</span> <br />
              <p className="mb-4 leading-relaxed">
                Sabin007.maharjan@gmail.com
              </p>{" "}
              <hr />
              <div className="navbar__dropdown-list mt-4"
            onClick={() => navigate("/my-details")}  >My Details</div>
              <div
                className="navbar__dropdown-list mb-3"
                onClick={() => navigate("/change-password")}
              >
                Change Password
              </div>{" "}
              <hr />
              <div className="navbar__dropdown-list mt-3" onClick={() => navigate("/")}>Logout</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default React.memo(NavBar);
function textUpperCase(userName: any): React.ReactNode {
  throw new Error("Function not implemented.");
}

import React from "react";
import { AiFillCaretDown, AiOutlineBell, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../container/dashboardLayout";

const NavBar = () => {
  const [displayBlock, setDisplayBlock] = React.useState<any>(false);
  const [notificationBlock, setNotificationBlock] = React.useState<any>(false);
  const navigate = useNavigate();
  const routes = window.location.pathname;

  return (
    <div className={"navbar__container"}>
      <div className="flex__justify__btwn">
        <div className="">{routes}</div>
        <div className="profile__container">
          <div className="admin_image flex gap-3">
            <span onClick={() => setNotificationBlock(!notificationBlock)}>
              <AiOutlineBell size={25} />
            </span>

            <span className="pe-3 profile__text">
              <AiOutlineUser size={25} />{" "}
            </span>

            <span onClick={() => setDisplayBlock(!displayBlock)}>
              <AiFillCaretDown size={25} />
            </span>
          </div>
          <div
            className={`notification ${
              notificationBlock ? "notification__block" : ""
            } `}
          >
            <h1 className="mb-8">Notification</h1>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/accepted-request")}
            >
              <div className="flex justify-between">
                <div>Request accepted</div>
                <div className="text-xs">2022-05-05 11:43 AM</div>
              </div>
              <div className="mb-4">
                <p className="leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam dignissimos id distinctio optio libero nisi maiores
                </p>
              </div>
              <hr />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/pending-request")}
            >
              <div className="flex justify-between">
                <div>Request Pending</div>
                <div className="text-xs">2022-05-05 11:43 AM</div>
              </div>
              <div className="mb-4">
                <p className="leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam dignissimos id distinctio optio libero nisi maiores
                </p>
              </div>
              <hr />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/shipped-load")}
            >
              <div className="flex justify-between">
                <div>Shipped load</div>
                <div className="text-xs">2022-05-05 11:43 AM</div>
              </div>
              <div className="mb-4">
                <p className="leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam dignissimos id distinctio optio libero nisi maiores
                </p>
              </div>
              <hr />
            </div>
          </div>
          <div
            className={`navbar__dropdown  ${
              displayBlock ? "navbar__dropdown__block" : ""
            }`}
          >
            <span>Sabin Maharjan</span> <br />
            <p className="mb-4 leading-relaxed text-sm">
              Sabin007.maharjan@gmail.com
            </p>{" "}
            <hr />
            <div
              className="navbar__dropdown-list flex mt-4"
              onClick={() => navigate("/my-details")}
            >
              <span className="mx-2">
                <FaRegUserCircle size={20} />
              </span>{" "}
              My Details
            </div>
            <div
              className="navbar__dropdown-list mb-3 flex"
              onClick={() => navigate("/change-password")}
            >
              <span className=" mx-2">
                <AiOutlineLock size={20} />
              </span>{" "}
              Change Password
            </div>{" "}
            <hr />
            <div
              className="navbar__dropdown-list mt-3 flex"
              onClick={() => navigate("/")}
            >
              <span className=" mx-2">
                <FiLogOut size={20} />
              </span>{" "}
              Logout
            </div>
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

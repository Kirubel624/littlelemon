import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";

import HomeIcon from "../../assets/Homeicon.svg";
import HamBurgerMenu from "../../assets/Hamburger.svg";
import Foodmenu from "../../assets/Foodmenu.svg";
import About from "../../assets/About.svg";
import Table from "../../assets/Table.svg";
import Order from "../../assets/Order.svg";
import useScreenwidth from "../../hooks/useScreenwidth";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/authReducer";
import LogOutIcon from "../../assets/lgout.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const screenWidth = useScreenwidth();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = localStorage.getItem("username");
 const dispatch=useDispatch()
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav>
        {screenWidth >= 1024 && (
          <ul className=" list-none flex flex-row justify-around items-center w-[] ">
            <Link to="/">
              {" "}
              <li className="pr-4 font-karla text-lg">Home</li>
            </Link>
            <li className="pr-4 font-karla text-lg">
              <Link to="/about">About</Link>
            </li>
            <li className="pr-4  font-karla text-lg">
              <Link to="/menu">Menu</Link>
            </li>
            <Link to="/booking">
              {" "}
              <li className="pr-4  font-karla text-lg">Reservations</li>
            </Link>
            <li className="pr-4  font-karla text-lg">
              <Link to="/order">Order Online</Link>
            </li>
            {!isLoggedIn ? (
              <li className="pr-4  font-karla text-lg">
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <>
              <p className="pr-4">Hi, {username}</p>  
                <Button
                  buttonText="Log out"
                  onClick={() => dispatch(logout())}
                />
              </>
            )}
          </ul>
        )}
        <img
          className="pr-4 lg:hidden "
          onClick={() => setOpen(true)}
          src={HamBurgerMenu}
        />
        <Drawer title="" placement="left" onClose={onClose} open={open}>
          {isLoggedIn && (
            <div className="flex items-center mb-10">
              {" "}
              <img
                src={`https://ui-avatars.com/api/?name=${username}`}
                alt={`Avatar of ${username}`}
                className="w-12 h-12 rounded-full mr-2"
              />
              <div className="flex flex-col">
                <p>Hey</p>
                <p className="font-medium text-base">
                  {username?.charAt(0)?.toUpperCase() + username?.slice(1)}
                </p>
              </div>
            </div>
          )}
          <Link
            className="brder-2 border-red-400 flex items-center mb-3"
            onClick={() => setOpen(false)}
            to="/">
            <img src={HomeIcon} />
            <p className="pl-4">Home</p>
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="flex items-center boder-2 border-red-400 mb-3">
            <img src={About} /> <p className="pl-4">About</p>
          </Link>
          <Link
            to="/menu"
            onClick={() => setOpen(false)}
            className="flex items-center mb-3">
            <img src={Foodmenu} /> <p className="pl-4">Menu</p>
          </Link>

          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="flex items-center mb-3">
            <img src={Table} /> <p className="pl-4">Reservations</p>
          </Link>

          <Link
            to="/order"
            onClick={() => setOpen(false)}
            className="flex items-center mb-3">
            <img src={Order} /> <p className="pl-4">Order Online</p>
          </Link>

          {!isLoggedIn ? (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center ">
              <Button
                style="w-full bg-[#F4CE14] text-black px-4 py-2 rounded"
                buttonText="Login"
                className="pl-4"
              />
            </Link>
          ) : (
            <div className="flex flex-col">
              <div>
                <Button
                  style="py-2 rounded-xl"
                  buttonText={
                    <div className="flex items-center">
                      <img src={LogOutIcon}/>
                      <p className="pl-4">Logout</p>
                    </div>
                  }
                  onClick={() => dispatch(logout())}
                />
              </div>
            </div>
          )}
          {/* {!isLoggedIn ? (
              <>
              
              </>
            ) : (
              <div className="flex flex-col">
               
               <div>
               <Button
                  style="py-2 rounded-xl"
                  text={<div className="flex items-center"><LogOutIcon/><p className="pl-4">Logout</p> </div>}
                  onClick={() => dispatch(logout())}
                />
               </div>
              </div>
            )} */}
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;

import React, { Component } from "react";
import BurgerMenu from "../assets/icons/burger-menu.png";
import Hide from "../assets/icons/hide.png";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: false,
    };
  }

  clickMenu() {
    this.setState({
      click: !this.state.click,
    });
  }

  componentDidUpdate() {
    console.log(this.state.click);
  }
  render() {
    let showMenu;

    if (this.state.click) {
      showMenu = (
        <div
          className="mx-auto mt-[10px]  rounded-b-md border-white shadow-lg shadow-slate-100 px-3 py-1 flex cursor-pointer"
          onClick={() => this.clickMenu()}
        >
          <img
            src={BurgerMenu}
            style={{ width: 30, height: 30 }}
            alt="icon menu"
            className="mr-[10px]"
          />
          <p className="m-auto text-black">Menu</p>
        </div>
      );
    } else {
      showMenu = (
        <div className="flex flex-col m-auto">
          <div
            className="mx-auto mt-[10px] border-2 rounded-b-md border-white shadow-lg shadow-slate-100 px-3 py-1 flex cursor-pointer"
            onClick={() => this.clickMenu()}
          >
            <img
              src={Hide}
              alt="hide"
              style={{ width: 30, height: 30 }}
              className="mr-2"
            />
            <p className="m-auto text-black">Hide Menu</p>
          </div>
          <p className="m-auto cursor-pointer">Home</p>
          <p className="m-auto cursor-pointer">Information</p>
          <p className="m-auto cursor-pointer">Marchandise</p>
          <p className="m-auto cursor-pointer">About</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col  mt-[30px] max-w-sm m-auto md:max-w-3xl lg:max-w-5xl lg:flex-row xl:max-w-6xl 2xl:max-w-7xl ">
        <div className="my-auto mx-auto w-1/2 lg:w-1/2">
          <p className="font-extrabold text-black text-[20px] mt-5 m-auto text-center lg:text-left lg:my-auto">
            Marmoot
          </p>
        </div>

        <div className="md:hidden">{showMenu}</div>
        <div className="hidden md:block md:flex md:flex-row md:max-w-4xl md:mx-auto md:justify-evenly md:mt-[20px] lg:w-1/2 lg:my-auto lg:justify-evenly lg:max-w-5xl">
          <p className="my-auto cursor-pointer lg:text-right lg:ml-[30px] md:mx-[30px]  ">
            Home
          </p>
          <p className="my-auto cursor-pointer lg:text-right lg:ml-[30px] md:mx-[30px] ">
            Information
          </p>
          <p className="my-auto cursor-pointer lg:text-right lg:ml-[30px]  md:mx-[30px]">
            Marchandise
          </p>
          <p className="my-auto cursor-pointer lg:text-right lg:ml-[30px] md:mx-[30px]">
            About
          </p>
        </div>
      </div>
    );
  }
}

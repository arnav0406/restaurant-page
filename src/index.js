import {loadHome} from "./load.js";
import {menuList} from "./menu.js";
import "./style.css";
const header=document.querySelector("header");
const header_content=document.createElement("div");
header_content.classList.add("header-content");
header.appendChild(header_content);
const navigation=document.querySelector("nav");
const home=document.createElement("button");
const menu=document.createElement("button");
navigation.textContent = "";
navigation.appendChild(home);
navigation.appendChild(menu);
home.textContent="Home";
menu.textContent="Menu";

home.addEventListener("click", loadHome);
loadHome();

menu.addEventListener("click",menuList);
import menuImage from "./menu-main.jpg";

const content = document.getElementById("content");

export function menuList() {
    content.textContent = "";
    const men = document.createElement("div");
    men.classList.add("menu-image");

    const menu_image = document.createElement("img");
    menu_image.src = menuImage; 
    menu_image.alt = "Restaurant Menu";

    men.appendChild(menu_image);
    content.appendChild(men);
}

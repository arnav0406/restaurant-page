const content=document.querySelector("#content");
export function loadHome(){
    content.textContent = "";

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-container");

    const heading=document.createElement("h1");
    heading.textContent="PLUM RESTAURANT";
    const p1=document.createElement("p");
    p1.textContent="The home of best food in Delhi. We serve best and deilicious food in whole of delhi. Come with your family and give us a chance to serve our delicious food to the table for you and the food that you will remember for ages. Be it birthday party or retiremnet party we got you covered. We also deliver our delicious food to your home as well and guess what the delivery fee is absolutely free. So come and give a chance to our restaurant and we promise you won't regret this decision.";

    const p2 = document.createElement("p");
    p2.textContent = "Home of best food in India. We provide quality and taste in food nothing else. From the last 20 years we are servng the best food in our locality. We have won countless awards for our food."
    const p3 = document.createElement("p");
    p3.textContent = "Our best selling dish is KAJU PANEER LABABDAAR. This is dish of us has won countless awards nationally and even internationally.";

    homeDiv.appendChild(heading);
    homeDiv.appendChild(p1);
    homeDiv.appendChild(p2);
    homeDiv.appendChild(p3);

    content.appendChild(homeDiv);

}




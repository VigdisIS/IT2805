let header = document.createElement("HEADER");
header.classList.add("header");

//Creates the different header elements and appends them to the header
let header_wrapper = document.createElement("DIV");
let header_container = document.createElement("DIV");
let menu_button = document.createElement("BUTTON");
let daily_offers_button = document.createElement("BUTTON");
let home_button = document.createElement("IMG");
let reviews_button = document.createElement("BUTTON");
let contact_us_button = document.createElement("BUTTON");

header_container.classList.add("header_container");

menu_button.innerText = "MENU";
menu_button.classList.add("menu_button");
menu_button.setAttribute("onclick", "window.location.href='menu.html'");

daily_offers_button.innerText = "DAILY OFFERS";
daily_offers_button.classList.add("daily_offers_button");
daily_offers_button.setAttribute(
  "onclick",
  "window.location.href='daily_offer.html'"
);

home_button.classList.add("home_button");
home_button.setAttribute("src", "media/actual_logo.png");
home_button.setAttribute("alt", "logo");
home_button.classList.add("image");
home_button.setAttribute("onclick", "window.location.href='homepage.html'");

reviews_button.innerText = "REVIEWS";
reviews_button.classList.add("reviews_button");
reviews_button.setAttribute("onclick", "window.location.href='reviews.html'");

contact_us_button.innerText = "CONTACT US";
contact_us_button.classList.add("contact_us_button");
contact_us_button.setAttribute(
  "onclick",
  "window.location.href='contact_us.html'"
);

header_container.appendChild(menu_button);
header_container.appendChild(daily_offers_button);
header_container.appendChild(home_button);
header_container.appendChild(reviews_button);
header_container.appendChild(contact_us_button);
header_wrapper.appendChild(header_container);
header.appendChild(header_container);
document.body.appendChild(header);

//Header for the mobile version of the website, some of this is inspired by W3schools,
//https://www.w3schools.com/howto/howto_js_sidenav.asp

const openNav = () => {
  document.getElementById("mySidenav").style.width = "45%";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

let headerV2 = document.createElement("DIV");
headerV2.id = "mobile_version_header";

let openSideNav = document.createElement("SPAN");
openSideNav.id = "sideNavOpen";
openSideNav.setAttribute("onclick", "openNav()");
openSideNav.innerHTML = "&#9776;";

headerV2.appendChild(openSideNav);

let home_button2 = document.createElement("IMG");
home_button2.classList.add("home_button2");
home_button2.setAttribute("src", "media/actual_logo.png");
home_button2.setAttribute("alt", "logo");
home_button2.classList.add("image");
home_button2.setAttribute("onclick", "window.location.href='homepage.html'");

headerV2.appendChild(home_button2);
document.body.appendChild(headerV2);

let mobileHeader = document.createElement("HEADER");
mobileHeader.classList.add("mobileHeader");

let sideNavDiv = document.createElement("DIV");
sideNavDiv.classList.add("sidenav");
sideNavDiv.id = "mySidenav";

let sideNav_container = document.createElement("DIV");

let closeBtn = document.createElement("a");
closeBtn.setAttribute("href", "javacript:void(0)");
closeBtn.classList.add("closebtn");
closeBtn.setAttribute("onclick", "closeNav()");
closeBtn.innerHTML = "&times;";

let home = document.createElement("a");
home.innerHTML = "HOME";
home.setAttribute("onclick", "window.location.href='homepage.html'");

let menu = document.createElement("a");
menu.innerHTML = "MENU";
menu.setAttribute("onclick", "window.location.href='menu.html'");

let daily_offers = document.createElement("a");
daily_offers.innerHTML = "DAILY OFFERS";
daily_offers.setAttribute("onclick", "window.location.href='daily_offer.html'");

let reviews = document.createElement("a");
reviews.innerHTML = "REVIEWS";
reviews.setAttribute("onclick", "window.location.href='reviews.html'");

let contact_us = document.createElement("a");
contact_us.innerHTML = "CONTACT US";
contact_us.setAttribute("onclick", "window.location.href='contact_us.html'");

sideNav_container.appendChild(closeBtn);
sideNav_container.appendChild(home);
sideNav_container.appendChild(menu);
sideNav_container.appendChild(daily_offers);
sideNav_container.appendChild(reviews);
sideNav_container.appendChild(contact_us);
sideNavDiv.appendChild(sideNav_container);
mobileHeader.appendChild(sideNavDiv);
document.body.appendChild(mobileHeader);

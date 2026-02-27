import "./app";

const route = location.pathname;

if(route.includes("login")) import("./pages/login.html");
if(route.includes("home")) import("./pages/home.html");

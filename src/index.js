import "./assets/css/style.css";
import projectsmastercomp from "./components/projectsmastercomp";
import navbtnfns from "./functions/navbtnfns";
import component from "./modules/component";

component("navbar");


navbtnfns();

const regexpt = /^\/Proj_todo_odin\/project_[\w]+$/;
if (window.location.pathname === "/Proj_todo_odin/") {
    component("home");
} else if (regexpt.test(window.location.pathname)) {
    projectsmastercomp(window.location.pathname);
} else {
    component(window.location.pathname.substring(16));
}


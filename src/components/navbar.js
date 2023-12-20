import elemcreater from "../modules/elemcreator";
import cvd from "../assets/images/chevron-down.svg";
import projfns from "../functions/projfns";

const navbar = () => {
  elemcreater({ prop: "nav#nav", parentId: "navbar" });
  elemcreater({ prop: "ul#navul", parentId: "nav" });
  for (let index = 0; index < 5; index++) {
    elemcreater({ prop: `li#li-${index}.navli`, parentId: "navul" }); // creating 5 li with id li-index
  }
  // creating home <a> tag
  elemcreater({
    prop: "a#homelink.navlink href='/Proj_todo_odin/'", parentId: "li-0"
  });
  // creating home <div> tag
  elemcreater({
    prop: "div#homebtn.navdiv.linkbtn",
    parentId: "homelink",
    text: "Home"
  });
  // creating today <a> tag
  elemcreater({
    prop: "a#todaylink.navlink href='/Proj_todo_odin/today'", parentId: "li-1"
  });

  // creating today <div> tag
  elemcreater({
    prop: "div#todaybtn.navdiv.linkbtn",
    parentId: "todaylink",
    text: "Today"
  });
  // creating week <a> tag
  elemcreater({
    prop: "a#weeklink.navlink href='/Proj_todo_odin/week'", parentId: "li-2"
  });
  // creating week <div> tag
  elemcreater({
    prop: "div#weekbtn.navdiv.linkbtn",
    parentId: "weeklink",
    text: "Week"
  });

  // creating project <div> tag
  elemcreater({
    prop: "div#projbtn", parentId: "li-3"
  });
  elemcreater({
    prop: "button#projectbtn",
    parentId: "projbtn",
    text: "Projects"
  });
  const pcvd = elemcreater({ prop: "img#pcvd", parentId: "projectbtn" });
  pcvd.src = `${cvd}`;

  // creating notes <a> tag
  elemcreater({
    prop: "a#noteslink.navlink href='/Proj_todo_odin/notes'", parentId: "li-4"
  });
  // creating notes <div> tag
  elemcreater({
    prop: "div#notesbtn.navdiv.linkbtn",
    parentId: "noteslink",
    text: "Notes"
  });
  projfns();
};

export default navbar;

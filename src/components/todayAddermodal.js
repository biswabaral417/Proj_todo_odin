
import precedenceSel from "../functions/precedenceSel";
import { today } from "../functions/todo";
import elemcreater from "../modules/elemcreator";
import localstoragesave from "../modules/localstoragesave";
import component from "../modules/component";

const addtoday = () => {
    localstoragesave("today", today({
        task: document.getElementById("todayTitleIn").value,
        description: document.getElementById("todayDescriptionIn").value,
        precedence: document.getElementById("precedenceSelect").value,

    }));
    document.getElementById("ModalWrapper").style.display = "none";
    document.querySelector(".AdderModalContainer") && document.querySelectorAll(".AdderModalContainer").forEach(a => { a.remove(); });
    component("today");
};
const todayAdderModal = () => {
    elemcreater({ prop: "h1#todayAdderHero.adderHero", parentId: "todayAdderModal", text: "Create task for today" });
    elemcreater({ prop: "div#todayAdderinpsContainer.adderContainer", parentId: "todayAdderModal" });
    elemcreater({ prop: "textarea#todayTitleIn placeholder='task Title'", parentId: "todayAdderinpsContainer" });
    elemcreater({ prop: "textarea#todayDescriptionIn placeholder='task Description'", parentId: "todayAdderinpsContainer" });
    elemcreater({ prop: "select#precedenceSelect.precedenceSelect", parentId: "todayAdderinpsContainer" });

    elemcreater({ prop: "option#low.prio value='low'", text: "low", parentId: "precedenceSelect" });
    elemcreater({ prop: "option#normal.prio value='normal'", text: "normal", parentId: "precedenceSelect" });
    elemcreater({ prop: "option#high.prio value='high'", text: "high", parentId: "precedenceSelect" });

    precedenceSel();
    elemcreater({ prop: "button#todayAdderBtn.adderbtn", text: "Add tasks for today", parentId: "todayAdderinpsContainer" });

    document.getElementById("todayAdderBtn").addEventListener("click", addtoday);
};
export default todayAdderModal;
import precedenceSel from "../functions/precedenceSel";
import { week } from "../functions/todo";
import component from "../modules/component";
import elemcreater from "../modules/elemcreator";
import localstoragesave from "../modules/localstoragesave";

const addweeks = () => {
    localstoragesave("week", week({
        task: document.getElementById("weekTitleIn").value,
        description: document.getElementById("weekDescriptionIn").value,
        precedence: document.getElementById("precedenceSelect").value,

    }));
    document.getElementById("ModalWrapper").style.display = "none";
    document.querySelector(".AdderModalContainer") && document.querySelectorAll(".AdderModalContainer").forEach(a => { a.remove(); });
    component("week");
};


const weekAdderModal = () => {
    elemcreater({ prop: "h1#weekAdderHero.adderHero", parentId: "weekAdderModal", text: "Create task for this week" });
    elemcreater({ prop: "div#weekAdderinpsContainer.adderContainer", parentId: "weekAdderModal" });
    elemcreater({ prop: "textarea#weekTitleIn placeholder='task Title'", parentId: "weekAdderinpsContainer" });
    elemcreater({ prop: "textarea#weekDescriptionIn placeholder='task Description'", parentId: "weekAdderinpsContainer" });
    elemcreater({ prop: "select#precedenceSelect.precedenceSelect", parentId: "weekAdderinpsContainer" });

    elemcreater({ prop: "option#low.prio value='low'", text: "low", parentId: "precedenceSelect" });
    elemcreater({ prop: "option#normal.prio value='normal'", text: "normal", parentId: "precedenceSelect" });
    elemcreater({ prop: "option#high.prio value='high'", text: "high", parentId: "precedenceSelect" });

    precedenceSel();
    elemcreater({ prop: "button#weekAdderBtn.adderbtn", text: "Add tasks for this week", parentId: "weekAdderinpsContainer" });

    document.getElementById("weekAdderBtn").addEventListener("click", addweeks);
};
export default weekAdderModal;
import { projects } from "../functions/todo";
import elemcreater from "../modules/elemcreator";
import localstoragesave from "../modules/localstoragesave";
const addProjects = () => {
    localstoragesave("projects", projects({
        title: document.getElementById("projTitleIn").value,
        description: document.getElementById("projDescriptionIn").value,
        tasks: Array.from(document.querySelectorAll(".projtasks")).map((element, index) => {
            return {
                task: document.getElementById(`projtask${index}TitleIn`).value,
                description: document.getElementById(`projtask${index}DescriptionIn`).value,
                precedence: document.getElementById(`precedenceSelect${index}`).value,
                DlDt: new Date(document.getElementById(`DueDatein${index}`).value)
            };
        })
    }));
    document.getElementById("ModalWrapper").style.display = "none";
    document.querySelector(".AdderModalContainer") && document.querySelectorAll(".AdderModalContainer").forEach(a => { a.remove(); });
    window.location.reload();
};
let i = 0;
const addTasks = () => {

    elemcreater({ prop: `div#projtask${i}.projtasks`, parentId: "projtasksdiv" });
    elemcreater({ prop: `textarea#projtask${i}TitleIn placeholder='task Title'`, parentId: `projtask${i}` });
    elemcreater({ prop: `textarea#projtask${i}DescriptionIn placeholder='task Description'`, parentId: `projtask${i}` });
    elemcreater({ prop: `select#precedenceSelect${i}.ProjpreSel`, parentId: `projtask${i}` });
    elemcreater({ prop: "option#low.prio value='low'", text: "low", parentId: `precedenceSelect${i}` });
    elemcreater({ prop: "option#normal.prio value='normal'", text: "normal", parentId: `precedenceSelect${i}` });
    elemcreater({ prop: "option#high.prio value='high'", text: "high", parentId: `precedenceSelect${i}` });
    elemcreater({ prop: `input#DueDatein${i}.projDueDate type='date'`, parentId: `projtask${i}` });
    document.getElementById(`DueDatein${i}`).setAttribute("min", new Date().toISOString().split("T")[0]);
    document.getElementById(`DueDatein${i}`).value = new Date().toISOString().split("T")[0];
    document.getElementById(`DueDatein${i}`).addEventListener("change", () => {
        if ((document.getElementById(`DueDatein${i}`).value) < (new Date().toISOString().split("T")[0])) {
            document.getElementById(`DueDatein${i}`).value = new Date().toISOString().split("T")[0];
        }
    });
    i++;
};
const projectsAdderModal = () => {

    elemcreater({ prop: "h1#projAdderHero.adderHero", parentId: "projectAdderModal", text: "Create New projects" });
    elemcreater({ prop: "div#projAdderinpsContainer.adderContainer", parentId: "projectAdderModal" });
    elemcreater({prop:"div#projtextareaContainer",parentId:"projAdderinpsContainer"});
    elemcreater({ prop: "textarea#projTitleIn.Intitle placeholder='Title'", parentId: "projtextareaContainer" });
    elemcreater({ prop: "textarea#projDescriptionIn.notesdes placeholder='Description'", parentId: "projtextareaContainer" });
    elemcreater({ prop: "div#projtasksdiv", parentId: "projAdderinpsContainer" });
    addTasks();
    elemcreater({ prop: "button#addmoretasks", text: "add one more task", parentId: "projAdderinpsContainer" });

    document.getElementById("addmoretasks").addEventListener("click", () => {
        addTasks();
    });
    elemcreater({ prop: "button#projAdderBtn.adderbtn", text: "Add Project", parentId: "projAdderinpsContainer" });

    document.getElementById("projAdderBtn").addEventListener("click", () => {
        addProjects();
    });

};
export default projectsAdderModal;
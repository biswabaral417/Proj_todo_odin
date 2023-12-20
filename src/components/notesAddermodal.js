import { notes } from "../functions/todo";
import component from "../modules/component";
import elemcreater from "../modules/elemcreator";
import localstoragesave from "../modules/localstoragesave";
const addnotes = () => {
    localstoragesave("notes", notes({
        title: document.getElementById("notesTitleIn").value,
        description: document.getElementById("notesDescriptionIn").value

    }));
    document.getElementById("ModalWrapper").style.display = "none";
    document.querySelector(".AdderModalContainer") && document.querySelectorAll(".AdderModalContainer").forEach(a => { a.remove(); });
    component("notes");
};
const notesAdderModal = () => {
    elemcreater({ prop: "h1#notesAdderHero.adderHero", parentId: "notesAdderModal", text: "Create New notes" });
    elemcreater({ prop: "div#notesAdderinpsContainer.adderContainer", parentId: "notesAdderModal" });
    elemcreater({ prop: "textarea#notesTitleIn.Intitle placeholder='Title'", parentId: "notesAdderinpsContainer" });
    elemcreater({ prop: "textarea#notesDescriptionIn.notesdes placeholder='Description'", parentId: "notesAdderinpsContainer" });
    elemcreater({ prop: "button#notesAdderBtn.adderbtn", text: "Add Note", parentId: "notesAdderinpsContainer" });
    document.getElementById("notesAdderBtn").addEventListener("click", addnotes);

};
export default notesAdderModal;

import { home } from "../functions/todo"
import component from "../modules/component"
import elemcreater from "../modules/elemcreator"
import localstoragesave from "../modules/localstoragesave"

const addhome = () => {
    localstoragesave('home', home({
        task: document.getElementById('homeTitleIn').value,
        description: document.getElementById(`homeDescriptionIn`).value,

    }))
    modalWrapper.style.display = 'none'
    document.querySelector(".AdderModalContainer") && document.querySelectorAll(".AdderModalContainer").forEach(a => { a.remove() })
    component('home')
    }
const homeAdderModal = () => {
    elemcreater({ prop: 'h1#homeAdderHero.adderHero', parentId: 'homeAdderModal', text: "Create task for home" })
    elemcreater({ prop: `div#homeAdderinpsContainer.adderContainer`, parentId: `homeAdderModal` })
    elemcreater({ prop: `textarea#homeTitleIn placeholder='task Title'`, parentId: `homeAdderinpsContainer` })
    elemcreater({ prop: `textarea#homeDescriptionIn placeholder='task Description'`, parentId: `homeAdderinpsContainer` })

    elemcreater({ prop: `button#homeAdderBtn.adderbtn`, text: 'Add home tasks', parentId: 'homeAdderinpsContainer' })

    document.getElementById('homeAdderBtn').addEventListener('click',addhome)
}
export default homeAdderModal
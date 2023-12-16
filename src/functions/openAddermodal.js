
import elemcreater from "../modules/elemcreator"
import component from "../modules/component"


const adderModal=(e)=>{
    const modalWrapper=document.getElementById('modalWrapper')
    modalWrapper.style.display='block'
    // elemcreater({prop:'div#AdderModalContainer',parentId:"content"})
    modalWrapper.addEventListener('click',()=>{
        modalWrapper.style.display='none'
        document.querySelector(".AdderModalContainer")&& document.querySelectorAll(".AdderModalContainer").forEach(a=>{a.remove()})
    })
    component(`${e.target.id.slice(3)}AdderModal`)
}
export default adderModal
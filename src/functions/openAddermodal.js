
import component from "../modules/component";


const adderModal=(e)=>{
    const modalWrapper=document.getElementById("modalWrapper");
    modalWrapper.style.display="block";
    modalWrapper.addEventListener("click",()=>{
        modalWrapper.style.display="none";
        document.querySelector(".AdderModalContainer")&& document.querySelectorAll(".AdderModalContainer").forEach(a=>{a.remove();});
    });
    component(`${e}AdderModal`);
};
export default adderModal;
import component from "../modules/component"
import elemcreater from "../modules/elemcreator"
import router from "../modules/router"
import adderModal from "./openAddermodal"

const navbtnfns = () => {
    if (!document.getElementById(`addproj`)) {
    const addbtn=elemcreater({prop:`button#addproj.addbtn`,parentId:'projectbtn' ,text:'+'})
    addbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        e.stopPropagation()
        adderModal(e)
        console.log('clicked')
    })
    }
    document.querySelectorAll('.linkbtn').forEach(item => {
        if (!document.getElementById(`add${item.id.slice(0,-3)}`)) {
            const addbtn=elemcreater({prop:`button#add${item.id.slice(0,-3)}.addbtn`,parentId:item.id ,text:'+'})
            addbtn.addEventListener('click',(e)=>{
                e.preventDefault()
                e.stopPropagation()
                adderModal(e)

            })
        }
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.linkbtn').forEach(el=>{
                el.style.backgroundColor=''
            })
            document.getElementById('projectbtn').style=''
            e.preventDefault()
            router(e.target.parentElement.href)
            component(e.target.id.slice(0,-3))
            item.style.backgroundColor='#f2f2f2'

        })
    })
}
export default navbtnfns
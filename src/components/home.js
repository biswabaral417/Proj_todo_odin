import elemcreater from "../modules/elemcreator";
import deletetask from "../functions/deletetask";
import svge from "../functions/svgdelndedit";
import edittasks from "../functions/edittasks";
import detailscomp from "./detainscomp";
const home = () => {

    if (localStorage.getItem('home')) {
        JSON.parse(localStorage.getItem('home')).forEach((e, i) => {
            elemcreater({ prop: `div#task_${i}.taskdiv`, parentId: `home` })
            elemcreater({ prop: `input#checkbox_${i}.checkbox type='checkbox'`, parentId: `task_${i}` })
            elemcreater({ prop: `p#titletask_${i}.tasktitle'`, parentId: `task_${i}`, text: e.task })
            elemcreater({ prop: `p#date_${i}.taskdldate`, parentId: `task_${i}`, text: e.DlDt.split('T')[0] })
            elemcreater({ prop: `button#details_${i}btn.detailstaskbtn`, parentId: `task_${i}`, text: 'details' })
            document.getElementById(`details_${i}btn`).addEventListener('click',()=>{
                detailscomp(e)
            })
            elemcreater({ prop: `button#edit_${i}btn.edittaskbtn`, parentId: `task_${i}` })
            elemcreater({ prop: `button#delete_${i}btn.deltaskbtn`, parentId: `task_${i}` })
            svge({ edparent: `edit_${i}btn`, delparent: `delete_${i}btn` })

            document.getElementById(`delete_${i}btn`).addEventListener('click', () => {
                deletetask({ index: i, type: 'home' })
            })
            document.getElementById(`edit_${i}btn`).addEventListener('click', () => {
                edittasks({ index: i, type: 'home' })
            })

        });
    }

}
export default home
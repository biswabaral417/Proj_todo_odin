import deletetask from "../functions/deletetask"
import edittasks from "../functions/edittasks"
import svge from "../functions/svgdelndedit"
import elemcreater from "../modules/elemcreator"
import detailscomp from "./detainscomp"
import projtasksedit from "./projtasksEDit"

const projectsmastercomp = (prop) => {
    while (document.getElementById('content').children[2]) {
        document.getElementById('content').children[2].remove()
    }
    const comp = document.createElement('div')

    comp.id = prop.substring(16)

    comp.classList += 'projCompcl'
    document.querySelector('#content').appendChild(comp)
    if (JSON.parse(localStorage.getItem('projects'))[Number(prop.substring(24))]) {
        let project = JSON.parse(localStorage.getItem('projects'))[Number(prop.substring(24))]
        elemcreater({ prop: `h2#projectTitle.projttl`, text: project.title, parentId: prop.substring(16) })
        elemcreater({ prop: `p#projectdescription.projdes`, text: `description : ${project.description}`, parentId: `${prop.substring(16)}` })
        elemcreater({ prop: `div#${prop.substring(24)}tasks.projtaskscontainerdiv`, parentId: prop.substring(16) })
        elemcreater({ prop: `button#edit_${prop.substring(16)}btn.projedittaskbtn`, parentId: 'projectTitle' })
        elemcreater({ prop: `button#delete_${prop.substring(16)}btn.projdeltaskbtn`, parentId: 'projectTitle' })
        svge({ edparent: `edit_${prop.substring(16)}btn`, delparent: `delete_${prop.substring(16)}btn` })
        document.getElementById(`delete_${prop.substring(16)}btn`).addEventListener('click', () => {
            deletetask({ index: prop.substring(24), type: 'projects' })
        })
        document.getElementById(`edit_${prop.substring(16)}btn`).addEventListener('click', () => {
            edittasks({ index: prop.substring(24), type: 'project' })
        })

        project.tasksres.forEach((e, i) => {
            elemcreater({ prop: `div#task_${i}.taskdiv`, parentId: `${prop.substring(24)}tasks` })
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
                let projects = JSON.parse(localStorage.getItem('projects'))
                projects[Number(prop.substring(24))].taskres = projects[Number(prop.substring(24))].tasksres.splice(i, 1)
                localStorage.setItem('projects', JSON.stringify(projects))
                projectsmastercomp(prop)
            })
            document.getElementById(`edit_${i}btn`).addEventListener('click', () => {
                projtasksedit({projnum:Number(prop.substring(24)),tasksresIndex:i})
            })
        })
    }

}
export default projectsmastercomp

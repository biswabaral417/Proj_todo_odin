import svge from "../functions/svgdelndedit"
import elemcreater from "../modules/elemcreator"

const projectsmastercomp = (prop) => {
    while (document.getElementById('content').children[2]) {
        document.getElementById('content').children[2].remove()
    }
    const comp = document.createElement('div')
    
    comp.id = prop.substring(16)
    console.log(prop)

    comp.classList += 'projCompcl'
    document.querySelector('#content').appendChild(comp)
    if (localStorage.getItem('projects')) {

        let project = JSON.parse(localStorage.getItem('projects'))[prop.substring(24)]
        elemcreater({ prop: `h2#projectTitle.projttl`, text: project.title, parentId: prop.substring(16)})
        elemcreater({ prop: `p#projectdescription.projdes`, text: `description : ${project.description}`, parentId: `${prop.substring(16)}` })
        elemcreater({ prop: `div#${prop.substring(24)}tasks.projtaskscontainerdiv`, parentId: prop.substring(16)})
        project.tasksres.forEach((e,i )=> {
            elemcreater({ prop: `div#task_${i}.taskdiv`, parentId: `${prop.substring(24)}tasks` })
            elemcreater({ prop: `input#checkbox_${i}.checkbox type='checkbox'`, parentId: `task_${i}` })
            elemcreater({ prop: `p#titletask_${i}.tasktitle'`, parentId: `task_${i}`, text: e.task })
            elemcreater({ prop: `p#date_${i}.taskdldate`, parentId: `task_${i}`, text: e.DlDt.split('T')[0] })
            elemcreater({ prop: `button#details_${i}btn.detailstaskbtn`, parentId: `task_${i}`, text: 'details' })
            elemcreater({ prop: `button#edit_${i}btn.edittaskbtn`, parentId: `task_${i}` })
            elemcreater({ prop: `button#delete_${i}btn.deltaskbtn`, parentId: `task_${i}` })
            svge({edparent:`edit_${i}btn`,delparent:`delete_${i}btn`})
        })
    }

}
export default projectsmastercomp

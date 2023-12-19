import elemcreater from "../modules/elemcreator"
import precedenceSel from "../functions/precedenceSel"


const projtasksedit = ({ projnum, tasksresIndex }) => {
    const modalWrapper=document.getElementById('modalWrapper')
    modalWrapper.style.display='block'
    modalWrapper.addEventListener('click',()=>{
        modalWrapper.style.display='none'
        document.querySelector(".AdderModalContainer")&& document.querySelectorAll(".AdderModalContainer").forEach(a=>{a.remove()})
    })
    let projects = JSON.parse(localStorage.getItem('projects'))
    elemcreater({ prop: `div#projtaskseditAddermodal.AdderModalContainer`, parentId: 'content' })
    elemcreater({ prop: 'h1#projtaskseditAdderHero.adderHero', parentId: 'projtaskseditAddermodal', text: `edit ${projects[projnum].tasksres[tasksresIndex].task}` })
    elemcreater({ prop: `div#projtaskseditAdderinpsContainer.adderContainer`, parentId: `projtaskseditAddermodal` })
    elemcreater({ prop: `textarea#projtaskseditTitleIn placeholder='task Title'`, parentId: `projtaskseditAdderinpsContainer`, valu: projects[projnum].tasksres[tasksresIndex].task })
    elemcreater({ prop: `textarea#projtaskseditDescriptionIn placeholder='task Description'`, parentId: `projtaskseditAdderinpsContainer`, valu: projects[projnum].tasksres[tasksresIndex].description })
    elemcreater({ prop: `select#precedenceSelect.precedenceSelect`, parentId: `projtaskseditAdderinpsContainer` })

    elemcreater({ prop: `option#low.prio value='low'`, text: 'low', parentId: `precedenceSelect` })
    elemcreater({ prop: `option#normal.prio value='normal'`, text: 'normal', parentId: `precedenceSelect` })
    elemcreater({ prop: `option#high.prio value='high'`, text: 'high', parentId: `precedenceSelect` })
    precedenceSel()
    elemcreater({ prop: `input#DueDatein.projDueDate type='date'`, parentId: `projtaskseditAdderinpsContainer` })
    document.getElementById(`DueDatein`).setAttribute('min', new Date().toISOString().split('T')[0])
    document.getElementById(`DueDatein`).value = projects[projnum].tasksres[tasksresIndex].DlDt.split('T')[0]
    document.getElementById(`DueDatein`).addEventListener('change', () => {
        if ((document.getElementById(`DueDatein`).value) < (new Date().toISOString().split('T')[0])) {
            document.getElementById(`DueDatein`).value = new Date().toISOString().split('T')[0];
        }
    });
    elemcreater({ prop: `button#projtaskseditAdderBtn.adderbtn`, text: 'save changes ', parentId: 'projtaskseditAdderinpsContainer' })
    document.getElementById('projtaskseditAdderBtn').addEventListener('click', () => {
        let dataOnls = JSON.parse(localStorage.getItem('projects'))
        dataOnls[projnum].tasksres[tasksresIndex] = {
            'task': document.getElementById(`projtaskseditTitleIn`).value,
            'description': document.getElementById(`projtaskseditDescriptionIn`).value,
            'precedence': document.getElementById(`precedenceSelect`).value,
            'DlDt': (new Date(document.getElementById(`DueDatein`).value)).toISOString()
        }
        localStorage.setItem('projects', JSON.stringify(dataOnls))
        modalWrapper.style.display = 'none'
        document.querySelector(".AdderModalContainer") && document.querySelectorAll(".AdderModalContainer").forEach(a => { a.remove() })
        window.location.reload()
    })

}
export default projtasksedit
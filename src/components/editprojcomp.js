import elemcreater from "../modules/elemcreator"
import { todo } from "../functions/todo"

const editProjects = (index) => {
    let dataOnls = JSON.parse(localStorage.getItem('projects'))
    dataOnls[index] = {
        'title': document.getElementById('projTitleIn').value,
        'description': document.getElementById('projDescriptionIn').value,
        'tasksres': Array.from(document.querySelectorAll('.projtasks')).map((element, index) => {
            return {
                'task': document.getElementById(`projtask${index}TitleIn`).value,
                'description': document.getElementById(`projtask${index}DescriptionIn`).value,
                'precedence': document.getElementById(`precedenceSelect${index}`).value,
                'DlDt': new Date(document.getElementById(`DueDatein${index}`).value)
            }
        })
    }
    localStorage.setItem('projects', JSON.stringify(dataOnls))
    modalWrapper.style.display = 'none'
    document.querySelector(".AdderModalContainer") && document.querySelectorAll(".AdderModalContainer").forEach(a => { a.remove() })
    window.location.reload()
}
let i;
const renTasks = (rdata) => {
    i = 0;
    while (document.getElementById('projtasksdiv').firstChild) {
        document.getElementById('projtasksdiv').lastChild.remove()
    }
    rdata.forEach((e) => {
        elemcreater({ prop: `div#projtask${i}.projtasks`, parentId: 'projtasksdiv' })
        elemcreater({ prop: `textarea#projtask${i}TitleIn placeholder='task Title'`, parentId: `projtask${i}`, valu: e.task })
        elemcreater({ prop: `textarea#projtask${i}DescriptionIn placeholder='task Description'`, parentId: `projtask${i}`, valu: e.description })
        elemcreater({ prop: `select#precedenceSelect${i}.ProjpreSel`, parentId: `projtask${i}`, valu: e.precedence })
        elemcreater({ prop: `option#low.prio value='low'`, text: 'low', parentId: `precedenceSelect${i}` })
        elemcreater({ prop: `option#normal.prio value='normal'`, text: 'normal', parentId: `precedenceSelect${i}` })
        elemcreater({ prop: `option#high.prio value='high'`, text: 'high', parentId: `precedenceSelect${i}` })
        elemcreater({ prop: `input#DueDatein${i}.projDueDate type='date'`, parentId: `projtask${i}` })

        document.getElementById(`DueDatein${i}`).setAttribute('min', new Date().toISOString().split('T')[0])
        document.getElementById(`DueDatein${i}`).value=e.DlDt.split('T')[0]
        document.getElementById(`DueDatein${i}`).addEventListener('change', () => {
            if ((document.getElementById(`DueDatein${i}`).value) < (new Date().toISOString().split('T')[0])) {
                document.getElementById(`DueDatein${i}`).value = new Date().toISOString().split('T')[0];
            }
        });
        const remprojtaskbtn = elemcreater({ prop: `button#remprojtask_${i}.projrem`, parentId: `projtask${i}` })
        const deleteicon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        deleteicon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        deleteicon.setAttribute('width', '16');
        deleteicon.setAttribute('height', '16');
        deleteicon.setAttribute('fill', 'black');
        deleteicon.setAttribute('class', 'bi bi-trash3-fill');
        deleteicon.setAttribute('viewBox', '0 0 16 16');
        const deleteiconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        deleteiconPath.setAttribute('d', 'M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5');
        deleteicon.appendChild(deleteiconPath);
        deleteiconPath.classList = 'deleteicon'
        remprojtaskbtn.appendChild(deleteicon)
        remprojtaskbtn.addEventListener('click', (e) => {
            const taskId = Number(e.target.closest('button').id.substring(12)); // Extract task ID
            if (!isNaN(taskId) && taskId !== null) {
                rdata.splice(taskId, 1);
            }
            renTasks(rdata);
        });
        i++

    })

}
const addmoreTasks = (data) => {
    elemcreater({ prop: `div#projtask${i}.projtasks`, parentId: 'projtasksdiv' })
    elemcreater({ prop: `textarea#projtask${i}TitleIn placeholder='task Title'`, parentId: `projtask${i}` })
    elemcreater({ prop: `textarea#projtask${i}DescriptionIn placeholder='task Description'`, parentId: `projtask${i}` })
    elemcreater({ prop: `select#precedenceSelect${i}.ProjpreSel`, parentId: `projtask${i}` })
    elemcreater({ prop: `option#low.prio value='low'`, text: 'low', parentId: `precedenceSelect${i}` })
    elemcreater({ prop: `option#normal.prio value='normal'`, text: 'normal', parentId: `precedenceSelect${i}` })
    elemcreater({ prop: `option#high.prio value='high'`, text: 'high', parentId: `precedenceSelect${i}` })
    elemcreater({ prop: `input#DueDatein${i}.projDueDate type='date'`, parentId: `projtask${i}` })
    document.getElementById(`DueDatein${i}`).setAttribute('min', new Date().toISOString().split('T')[0])
    document.getElementById(`DueDatein${i}`).value = new Date().toISOString().split('T')[0]
    document.getElementById(`DueDatein${i}`).addEventListener('change', () => {
        if ((document.getElementById(`DueDatein${i}`).value) < (new Date().toISOString().split('T')[0])) {
            document.getElementById(`DueDatein${i}`).value = new Date().toISOString().split('T')[0];
        }
    });
    const remprojtaskbtn = elemcreater({ prop: `button#remprojtask_${i}.projrem`, parentId: `projtask${i}` })
    const deleteicon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteicon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    deleteicon.setAttribute('width', '16');
    deleteicon.setAttribute('height', '16');
    deleteicon.setAttribute('fill', 'black');
    deleteicon.setAttribute('class', 'bi bi-trash3-fill');
    deleteicon.setAttribute('viewBox', '0 0 16 16');
    const deleteiconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    deleteiconPath.setAttribute('d', 'M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5');
    deleteicon.appendChild(deleteiconPath);
    deleteiconPath.classList = 'deleteicon'
    remprojtaskbtn.appendChild(deleteicon)
    let adeddata=todo({
        task:document.getElementById(`projtask${i}TitleIn`).value,
        description:document.getElementById(`projtask${i}DescriptionIn`).value,
        precedence:document.getElementById(`precedenceSelect${i}`),
        DlDt:new Date(document.getElementById(`DueDatein${i}`).value)
    })
    data.push(adeddata)
    remprojtaskbtn.addEventListener('click', (e) => {
        renTasks(data);
    });
    i++
}
const editprojcomp = (index) => {
    let data = JSON.parse(localStorage.getItem('projects'))[index]
    const modalWrapper = document.getElementById('modalWrapper')
    modalWrapper.style.display = 'block'
    modalWrapper.addEventListener('click', () => {
        modalWrapper.style.display = 'none'
        document.querySelector(".AdderModalContainer") && document.querySelectorAll(".AdderModalContainer").forEach(a => { a.remove() })
    })
    const comp = document.createElement('div')
    comp.id = 'projectAdderModal'
    comp.className = 'AdderModalContainer'
    document.querySelector('#content').appendChild(comp)
    elemcreater({ prop: 'h1#projAdderHero.adderHero', parentId: 'projectAdderModal', text: "edit this project" })
    elemcreater({ prop: 'div#projAdderinpsContainer.adderContainer', parentId: 'projectAdderModal' })
    elemcreater({ prop: `div#projtextareaContainer`, parentId: 'projAdderinpsContainer' })
    elemcreater({ prop: `textarea#projTitleIn.Intitle placeholder='Title'`, parentId: 'projtextareaContainer',valu:data.title })
    elemcreater({ prop: `textarea#projDescriptionIn.notesdes placeholder='Description'`, parentId: 'projtextareaContainer',valu:data.description })
    elemcreater({ prop: `div#projtasksdiv`, parentId: "projAdderinpsContainer" })
    renTasks(data.tasksres)
    elemcreater({ prop: `button#addmoretasks`, text: 'add one more task', parentId: `projAdderinpsContainer` })

    document.getElementById('addmoretasks').addEventListener('click', () => {
        addmoreTasks(data.tasksres)

    })
    elemcreater({ prop: `button#projeditBtn.adderbtn`, text: 'edit Project', parentId: 'projAdderinpsContainer' })
    document.getElementById('projeditBtn').addEventListener('click', () => {
        editProjects(index)
    })

}
export default editprojcomp
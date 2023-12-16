import navbar from "../components/navbar"
import home from "../components/home"
import today from "../components/today"
import week from "../components/week"
import notes from "../components/notes"
import homeAdderModal from "../components/homeAddermodal"
import notesAdderModal from "../components/notesAddermodal"
import projectsAdderModal from "../components/projectsAdderModal"
import todayAdderModal from "../components/todayAddermodal"
import weekAdderModal from "../components/weekadderodal"
const comps = {
    'home': home,
    'navbar': navbar,
    'today': today,
    'week': week,
    'notes': notes,
    'projAdderModal': projectsAdderModal,
    'weekAdderModal': weekAdderModal,
    'todayAdderModal': todayAdderModal,
    'notesAdderModal': notesAdderModal,
    'homeAdderModal': homeAdderModal
}

const component = (c) => {
    if (!(c.substring(c.length-10) == 'AdderModal')) {
        while (document.getElementById('content').children[2]) {
            document.getElementById('content').children[2].remove()
        }
    }
    
    if (!document.getElementById(c)||document.getElementById(c)=='null') {
        const comp = document.createElement('div')
        comp.id = c
        if(c.substring(c.length-10) == 'AdderModal'){
            comp.classList+='AdderModalContainer'
        }
        document.querySelector('#content').appendChild(comp)
        comps[c]()
    }
}
export default component
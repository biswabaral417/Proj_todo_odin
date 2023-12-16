import projectsmastercomp from "../components/projectsmastercomp";
import elemcreater from "../modules/elemcreator";
import router from "../modules/router";

const projfns = () => {
    JSON.parse(localStorage.getItem('projects')).forEach((element, i) => {
        if (!document.getElementById('projectsul')) {
    
            const projnavul = elemcreater({ prop: `ul#projectsul.projulhidden`, parentId: `projbtn` })
        }
        if (!document.getElementById(`projnav${i}`)) {
            elemcreater({ prop: `li#projnav${i}`, parentId: 'projectsul', })
            elemcreater({ prop: `a#proj_${i}link.projnavlink href='/Proj_todo_odin/project_${i}'`, parentId: `projnav${i}`, text: element.title })

        }
    });
    if (localStorage.getItem('projects')) {
        let rotationdeg = 0
        document.getElementById('projectbtn').addEventListener('click', () => {
            document.querySelectorAll('.linkbtn').forEach(el => {
                el.style.backgroundColor = ''
            })
            if (document.getElementById('projectsul').classList == 'projulhidden') {
                document.getElementById('projectsul').classList.remove ('projulhidden')
                document.getElementById('projectsul').classList.add('projulshown')
                const img = document.getElementById('pcvd')
                rotationdeg += 180
                img.style.transform = `rotate(${rotationdeg}deg)`;
                document.getElementById('projectbtn').style.backgroundColor = '#f2f2f2'
            }
            else {
                document.getElementById('projectsul').classList.remove ('projulshown')
                document.getElementById('projectsul').classList.add('projulhidden')
                const img = document.getElementById('pcvd')
                rotationdeg += 180
                img.style.transform = `rotate(${rotationdeg}deg)`;
            }
        })
       
    }
    const projNavLink = document.querySelectorAll('.projnavlink')
    projNavLink.forEach(e => {
        e.addEventListener('click', (e) => {
            e.preventDefault();
            router(e.target.getAttribute('href'))
            projectsmastercomp(e.target.getAttribute('href'))
        })
    })
}
export default projfns
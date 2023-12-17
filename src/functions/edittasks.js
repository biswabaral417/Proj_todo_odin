import elemcreater from "../modules/elemcreator"
import adderModal from "./openAddermodal"
import component from "../modules/component"



const edittasks = ({ index, type }) => {
    console.log(type)
    adderModal(type)
    document.getElementById(`${type}AdderBtn`).remove()
    let data = JSON.parse(localStorage.getItem(type))
    document.getElementById(`${type}AdderHero`).textContent = `edit ${data[index].task !== undefined ? data[index].task : data[index].title}`
    const editbtn = elemcreater({ prop: `button#${type}editBtn.editbtn`, text: 'edit', parentId: 'todayAdderinpsContainer' })
    document.getElementById(`${type}TitleIn`).value = data[index].task !== undefined ? data[index].task : data[index].title;
    document.getElementById(`${type}DescriptionIn`).value = data[index].description
    if (document.getElementById(`precedenceSelect`)) {

        document.getElementById(`precedenceSelect`).value = data[index].precedence
        switch (document.querySelector('.precedenceSelect').value) {
            case 'high':
                document.querySelector('.precedenceSelect').style.backgroundColor = 'red'
                document.querySelector('.precedenceSelect').style.color = 'black'
                break;
            case 'normal':
                document.querySelector('.precedenceSelect').style.backgroundColor = 'orange'
                document.querySelector('.precedenceSelect').style.color = 'black'
                break;
            default:
                document.querySelector('.precedenceSelect').style.backgroundColor = 'green'
                document.querySelector('.precedenceSelect').style.color = 'white'
                break;
        }
    }
    document.getElementById(`${type}editBtn`).addEventListener('click', () => {
        data[index].title !== undefined ? (data[index].title = document.getElementById(`${type}TitleIn`).value) : (data[index].task = document.getElementById(`${type}TitleIn`).value)
        data[index].description = document.getElementById(`${type}DescriptionIn`).value
        document.getElementById('precedenceSelect') && (data[index].precedence = document.getElementById(`precedenceSelect`).value)
        localStorage.setItem(type, JSON.stringify(data));
        document.getElementById(`modalWrapper`).style.display='none'
        component('home')
    })

}
export default edittasks
import component from '../modules/component'
import router from '../modules/router';
const deletetask = ({ index, type }) => {
    const data = JSON.parse(localStorage.getItem(type))
    if (index > -1 && index < data.length) {
        data.splice(index, 1);
        localStorage.setItem(type, JSON.stringify(data))
        if (type == 'projects') {
            component('home')
            router('/Proj_todo_odin/')
        }
        else {
            component(type)
        }
    }
}
export default deletetask
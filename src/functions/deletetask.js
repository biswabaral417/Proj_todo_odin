import component from '../modules/component'
const deletetask=({index,type})=>{
    const data=JSON.parse(localStorage.getItem(type))
    if (index > -1 && index < data.length) {
        data.splice(index, 1);
        console.log(data); 
        localStorage.setItem(type,JSON.stringify(data))
        component(type)
    } else {
        console.log("Index out of bounds");
    }
}
export default deletetask
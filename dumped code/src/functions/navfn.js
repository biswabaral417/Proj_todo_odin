import router from "../modules/router"
import todogen from "../components/todogen"

const navfns=()=>{
    
    document.querySelectorAll('.navbtn').forEach(item=>{
        item.addEventListener('click',(e)=>{    
            router(e);
        })
    })
}
export default navfns
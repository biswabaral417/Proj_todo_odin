import  compfns  from "./component";

const router=(e)=>{
    e.preventDefault()

    history.replaceState(null,null,e.target.parentElement.href)
    while(document.getElementById('content').children[2]){
        document.getElementById('content').children[2].remove()
    }
    if(e.target.parentElement.href.substring(37)===""||e.target.parentElement.href.substring(37)==null){
        compfns['home']()
    }
    else{
        compfns[e.target.parentElement.href.substring(37)]()
        // console.log(e.target.parentElement.href.substring(37))
    }
}
export default router;
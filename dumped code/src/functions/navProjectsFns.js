const navProjFns=()=>{
    document.getElementById('projects').addEventListener('click',(e)=>{
        const projects =document.querySelectorAll('.project')
        console.log(projects)
        if (e.target.children[0].style.dispaly==="none") {
            projects.forEach(el=>el.target.style.display='')
        }
        else{
            projects.forEach(el=>el.target.style.display='none') 
        }
    })
}
export default navProjFns
import elemcreater from "../modules/elemcreator";

const detailscomp=({ cDT,DlDt,task,description,precedence})=>{
    let CDt=new Date(cDT)
    CDt=CDt.toLocaleString('en-US',{timeZone:`Asia/Kathmandu`})
    DlDt=new Date(DlDt)
    DlDt=DlDt.toLocaleString('en-US',{timeZone:`Asia/Kathmandu`})
    
    const modalWrapper=document.getElementById('modalWrapper')
    modalWrapper.style.display='block'
    modalWrapper.addEventListener('click',()=>{
        modalWrapper.style.display='none'
        document.querySelector(".AdderModalContainer")&& document.querySelectorAll(".AdderModalContainer").forEach(a=>{a.remove()})
    });
    elemcreater({prop:`div#detailscomp.AdderModalContainer`,parentId:'content'})
    elemcreater({ prop: 'h1#detailsHero.adderHero', parentId: 'detailscomp', text:task })
    elemcreater({ prop: 'p#detailsDescription.detailsDescription', parentId: 'detailscomp', text:`Description : ${description}` })
    elemcreater({prop:`p#detailsCDTDate.detailsCDt`,parentId:'detailscomp',text:`Creation Date : ${CDt.split(',')[0]}`})
    elemcreater({prop:`p#detailsCDTTime.detailsCDt`,parentId:'detailscomp',text:`Creation Time : ${CDt.split(',')[1]}`})
    elemcreater({prop:`p#detailsDLDTDate.detailsDLDT`,parentId:'detailscomp',text:`Deadline Date : ${DlDt.split(',')[0]}`})
    elemcreater({prop:`p#detailsDLDTTime.detailsDLDT`,parentId:'detailscomp',text:`Deadline Time : ${DlDt.split(',')[1]}`})
    elemcreater({prop:`h4#precedencceDetails`,parentId:'detailscomp',text:precedence})




}
export default detailscomp
import elemcreater from "../modules/elemcreator";
import svge from "../functions/svgdelndedit";
const notes=()=>{
    if (localStorage.getItem('notes')) {
        JSON.parse(localStorage.getItem('notes')).forEach((e, i) => {
            elemcreater({ prop: `div#notes_${i}.notesdiv`, parentId: `notes` })
            elemcreater({prop:`div#titleDiv_${i}.notestitlediv`,parentId:`notes_${i}`})
            elemcreater({ prop: `h4#titlenotes_${i}.notestitle'`, parentId: `titleDiv_${i}`, text: e.title })
            elemcreater({ prop: `button#edit_${i}btn.editnotesbtn`, parentId: `titleDiv_${i}` })
            elemcreater({ prop: `button#delete_${i}btn.delnotesbtn`, parentId: `titleDiv_${i}` })
            elemcreater({prop:`p#description_${i}.notesdescription`,parentId:`notes_${i}`,text:e.description})
            svge({ edparent: `edit_${i}btn`, delparent: `delete_${i}btn` })
        });
    }
}
export default notes
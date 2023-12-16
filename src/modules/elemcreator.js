const elemcreater=({prop,parentId,text})=>{
    console.log(prop)
    const element = document.createElement(prop.trim().match(/^\s*(\w+)?/)[0])//create an element 
    element.id = (prop.match(/\b\w+(?:-\w+)?(?:-\w+)?\b/g)[1])//add id to element 
    prop.match(/\.\w+/g)&&(prop.match(/\.\w+/g).forEach(item => {
        element.classList.add(item.substring(1))//add class to element 
    }));
    prop.match(/href=\s*'([^']*)'/) && (element.setAttribute('href',prop.match(/href=\s*'([^']*)'/)[1])) //add href if exists 
    parentId&& document.getElementById(parentId).appendChild(element)//appent to parent element
    text&&(element.textContent=text)  //add text if it exists 
    prop.match(/placeholder='[^']*'/)&&element.setAttribute('placeholder',prop.match(/placeholder='([^']*)'/)[1])
    prop.match(/value='[^']*'/)&&element.setAttribute('value',prop.match(/value='([^']*)'/)[1])
    prop.match(/type='[^']*'/)&&element.setAttribute('type',prop.match(/type='([^']*)'/)[1])
    return element
}
export default elemcreater
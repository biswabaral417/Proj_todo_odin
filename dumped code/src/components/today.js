const today = () => {
    const element = document.createElement('div')
    element.id='todaycomp'
    element.classList='component'
    document.getElementById('content').appendChild(element)
}
export default today
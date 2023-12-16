const svge = ({delparent, edparent}) => {
    const deleteicon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteicon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    deleteicon.setAttribute('width', '16');
    deleteicon.setAttribute('height', '16');
    deleteicon.setAttribute('fill', 'black');
    deleteicon.setAttribute('class', 'bi bi-trash3-fill');
    deleteicon.setAttribute('viewBox', '0 0 16 16');
    const deleteiconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    deleteiconPath.setAttribute('d', 'M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5');
    deleteicon.appendChild(deleteiconPath);
    deleteiconPath.classList = 'deleteicon'


    const editicon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    editicon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    editicon.setAttribute('width', '16');
    editicon.setAttribute('height', '16');
    editicon.setAttribute('fill', 'black');
    editicon.setAttribute('class', 'bi bi-trash3-fill');
    editicon.setAttribute('viewBox', '0 0 16 16');
    const editiconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const editiconPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    editiconPath2.setAttribute('d', 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z')
    editiconPath2.setAttribute('fill-rule', 'even-odd')
    editiconPath.setAttribute('d', 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z');
    editicon.appendChild(editiconPath);
    editicon.appendChild(editiconPath2);

    editiconPath.classList = 'editicon'
    
    document.getElementById(edparent).appendChild(editicon)
    document.getElementById(delparent).appendChild(deleteicon)
}
export default svge
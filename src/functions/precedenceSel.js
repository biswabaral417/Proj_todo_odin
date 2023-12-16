const precedenceSel = () => {
    document.querySelector('.precedenceSelect').addEventListener('change', () => {
        switch (document.querySelector('.precedenceSelect').value) {
            case 'high':
                document.querySelector('.precedenceSelect').style.backgroundColor = 'red'
                document.querySelector('.precedenceSelect').style.color = 'black'
                break;
            case 'normal':
                document.querySelector('.precedenceSelect').style.backgroundColor = 'orange'
                document.querySelector('.precedenceSelect').style.color = 'black'
                break;
            default:
                document.querySelector('.precedenceSelect').style.backgroundColor = 'green'
                document.querySelector('.precedenceSelect').style.color = 'white'
                break;
        }
    })
}
export default precedenceSel
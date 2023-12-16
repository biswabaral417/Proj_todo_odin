import './assets/css/nav.css'
import './assets/css/style.css'
import ddimg from './assets/images/chevron-down.svg'
import navfns from './functions/navfn'
import navProjFns from './functions/navProjectsFns'
import mDDimg from './assets/images/list.svg'


navfns()


const pddimg = new Image

pddimg.src = ddimg

const navDDcreator = () => {
    const mDdimg = new Image
    mDdimg.src = mDDimg
    const navDD = document.createElement('button')
    navDD.id = 'navDD'
    mDdimg.classList = 'mDDimg'
    mDdimg.id = 'mDDimg'
    document.getElementById('herodiv').appendChild(navDD)
    navDD.appendChild(mDdimg)
}




const navheader = document.getElementById('navheader')
const resonsiveNav = () => {
    if (window.innerWidth <= 800) {
        document.getElementById('navheader') && (navheader.remove())
        if (!document.getElementById('navDD')) {
            navDDcreator()
            document.getElementById('navDD').addEventListener('click',()=>{
                if (!document.getElementById('nav')) {
                    document.getElementById('content').appendChild(navheader)
                    const xbtn=document.createElement('button')
                    xbtn.id='xbtn'
                    navheader.appendChild(xbtn)
                    xbtn.textContent='X'
                    document.querySelector('.addbtn').addEventListener('click',(e)=>{
                        document.getElementById('modal-wrapper').style.display='block'
                        if (!document.getElementById('todogencomp')) {
                            todogen()
                        }
                        document.getElementById('modal-wrapper').addEventListener('click',()=>{
                            if (document.getElementById('todogencomp')) {
                                document.getElementById('todogencomp').remove()
                            }
                            document.getElementById('modal-wrapper').style.display='none'
                        })
                    })
                    navProjFns()
                    if (!document.getElementById('pddimg')) {
                        document.getElementById('projects').appendChild(pddimg)
                        pddimg.classList = 'pddimg'
                        pddimg.id = 'pddimg'
                    }

                } else {
                    document.getElementById('navheader').remove()
                }
            })

        }
    }
    else {
        !document.getElementById('navheader') && document.getElementById('content').appendChild(navheader)
        document.getElementById('navDD') && document.getElementById('navDD').remove()
        document.querySelector('.addbtn').addEventListener('click',(e)=>{
            document.getElementById('modal-wrapper').style.display='block'
            if (!document.getElementById('todogencomp')) {
                todogen()
            }
            document.getElementById('modal-wrapper').addEventListener('click',()=>{
                if (document.getElementById('todogencomp')) {
                    document.getElementById('todogencomp').remove()
                }
                document.getElementById('modal-wrapper').style.display='none'
            })
        })
        navProjFns()
        if (!document.getElementById('pddimg')) {
            document.getElementById('projects').appendChild(pddimg)
            pddimg.classList = 'pddimg'
            pddimg.id = 'pddimg'
        }

    }
}
resonsiveNav()

window.addEventListener('resize', () => {
    resonsiveNav()
})

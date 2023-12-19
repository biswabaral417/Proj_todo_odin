const todo = ({ task, DlDt, precedence,description}) => {
    if (!(DlDt instanceof Date)) {
        return { error: 'Dldt must be date object' }
    }

    const cDT = new Date
    if (!(precedence === 'high' || precedence === 'low' || precedence === 'normal' || precedence === 'urgent')) {
        return { error: 'precedence is not a enum' }
    }
    let status=false
    return {
        task,
        DlDt,
        cDT,
        precedence,
        description,
        status
    }
}

const week = ({ task, precedence,description }) => {
    let DlDt = new Date
    DlDt.setDate(DlDt.getDate() + 7)

    const todores = todo({ task, DlDt, precedence,description })
    return todores
}

const today = ({ task, precedence ,description}) => {
    let DlDt = new Date
    const todores = todo({ task, DlDt, precedence,description })
    return todores
}

const home = ({task,description}) => {
    let DlDt = new Date
    const todores = todo({ task, DlDt, precedence: "low",description })
    return todores
}

const projects = ({ title, tasks,description }) => {
    let tasksres = []
    tasks.forEach(element => {
        tasksres.push(todo(element))
    });
    return {
        title,description,tasksres
    }
}

const notes = ({ title, description }) => {
    return { title, description }
}

export {
    notes,home,week,today,projects,todo
}



import React, { useState, useEffect } from 'react'
const getData = () => {
    let list = localStorage.getItem("list")
    if (list) {
        return JSON.parse(list)
    }
    else {
        return []
    }
}

export const Todo = () => {
    const [text, setText] = useState('Add on List')
    const [add, setadd] = useState(getData())
    const[all,setAll]=useState([])
    const onText = (ele) => {
        console.log("submitted")
        const { value } = ele.target
        setText(value)
    }
    const submitHandler = (ele) => {
        ele.preventDefault();
        setadd([...add, text])
        setText("")


    }
    const allEle = (ele)=>{
       setAll(ele)

    } 
    const removeText = (ele) => {
        const data = add.filter((curEle, ind) => {
            return ind != ele;

        })
        setadd(data)

    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(add))

    }, [add])


    return (
        <>
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-md-12">
                            <div class="card px-3">
                                <div class="card-body">
                                    <h4 class="card-title">Todo list</h4>
                                    <form onSubmit={submitHandler}>
                                        <div class="add-items d-flex">
                                            <input type="text" class="form-control todo-list-input" value={text} onChange={onText} />
                                            <button class="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
                                        </div>
                                    </form>
                                    <div className="container">
                                        <div className="row">
                                            <ul class="nav nav-pills todo-nav">
                                                <li role="presentation" class="nav-item all-task active"><button className='btn btn-outline-primary' onClick={()=>allEle(add)}>All</button></li>
                                                <li role="presentation" class="nav-item active-task"><button className='btn btn-outline-primary'>Active</button></li>
                                                <li role="presentation" class="nav-item completed-task"><button className='btn btn-outline-primary'>Completed</button></li>
                                            </ul>
                                            
                                            {
                                                add.map((ele, ind) => {
                                                    return (
                                                        <>
                                                            <div className="col-6">{ele}</div>
                                                            <div className="col-6"><button onClick={() => removeText(ind)}>x</button></div>

                                                        </>
                                                    )
                                                }
                                                )
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

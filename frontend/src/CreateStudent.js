import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function CreateStudent() {
    const[name, setname] = useState('')
    const[email, setemail] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8082/create', {name, email})
        .then(res => {
            console.log(res);
            navigate('/home');
        }).catch(err => console.log(err))
        }
    
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input  type="text" placeholder='Enter name' className='form-control' 
                        onChange={e => setname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter email' className='form-control'
                        onChange={e => setemail(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default CreateStudent
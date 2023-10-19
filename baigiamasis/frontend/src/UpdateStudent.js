import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from 'react-router-dom'

function UpdateStudent() {
    const[name, setname] = useState('')
    const[email, setemail] = useState('')
    const {id} = useParams()
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8082/home/update/'+id, { name, email })
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err))
        }
    
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update student</h2>
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
                    <button className='btn w-25 btn-success'>Update</button>
                    <div>
                    <Link to="/home" className='justify-content-center align-items-center'><strong>Back</strong></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default UpdateStudent
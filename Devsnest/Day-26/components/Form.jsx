import React from 'react';
import {updateFirstNameInput, updateLastNameInput} from "../redux/userForm/userFormActions";
import { useDispatch, useSelector } from 'react-redux';

const Form = () =>{

    const firstName = useSelector(state =>state.firstName);
    const lastName = useSelector(state =>state.lastName);

    const dispatch = useDispatch()
    return (
        <div>
            <h2>Input</h2>
            <form action="">
                Name: <input 
                type="text"
                value={firstName}
                onChange={ (e) => dispatch(updateFirstNameInput(e.target.value))}
                />
                Email: <input 
                type="text"
                value={lastName}
                onChange={ (e) => dispatch(updateLastNameInput(e.target.value))}
                /> 
            </form>
            <div className="result"> 
            <h2>Data</h2>
                <p>Name : {firstName}</p>
                <p>Email : {lastName}</p>
            </div>
        </div>
    );
} 
export default Form;
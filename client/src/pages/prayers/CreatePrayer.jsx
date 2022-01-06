import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onCreatePrayer } from '../../app/action/prayers';

function CreatePrayer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputData = {
        title: '',
        description: ''
    }
    const [formValue, setFormValue] = useState(inputData);
    const [loading, setLoading] = useState('');
    const handleChange = (evt) => {
       const { name, value } = evt.target;
       setFormValue((prevState) => {
           return {
               ...prevState,
               [name]: value
           }
       })
    }
    useEffect(() => {

    })
    function handleSubmitPrayer(evt) {
        evt.preventDefault();
        setLoading(true);
        const formData = {
            title: formValue.title,
            description: formValue.description
        }
        dispatch(onCreatePrayer(formData)).then(() => {
            setLoading(false);
            navigate('/');
        }, (error) => {
            setLoading(false);
            console.log(error);
        })
    }
    return (
        <div className="create-prayer-container">
            <form onSubmit={handleSubmitPrayer}>
                <input className="input-field" name="title" type="text" placeholder="Title here" value={formValue.title} onChange={handleChange} />
                <textarea className="input-field" name="description" cols="30" rows="10" placeholder="Description here" value={formValue.description} onChange={handleChange} />
                <button type="submit" className="btn-submit">{loading ? 'Submitting' : 'Submit Prayer'}</button>
            </form>
        </div>
    );
}

export default CreatePrayer;

import React, { useState, useEffect } from 'react';
import { API } from '../../app/API';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePrayer } from '../../app/action/prayers';
import { useDispatch } from 'react-redux';

function UpdatePrayer() {
    const initialState = {
        title: '',
        description: ''
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [prayer, setPrayer] = useState(initialState);
    const { id } = useParams();
    useEffect(() => {
        API.fetchSinglePrayer(id).then((response) => {
            setPrayer(response);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setPrayer({ ...prayer, [name]: value });
    }
    const handleUpdatePrayer = (evt) => {
        evt.preventDefault();
        const formValue = {
            title: prayer.title,
            description: prayer.description
        }
        dispatch(updatePrayer(formValue, id)).then(() => {
            navigate('/');
        })
    }
    return (
        <div className="create-prayer-container">
            <form onSubmit={handleUpdatePrayer}>
                <input className="input-field" type="text" name="title" placeholder="Title" onChange={handleChange} value={prayer?.title} />
                <textarea className="input-field" name="description" placeholder="Description" onChange={handleChange} value={prayer?.description} cols="30" rows="20" />
                <button type="submit">Update Prayer</button>
            </form>
        </div>
    );
}

export default UpdatePrayer;

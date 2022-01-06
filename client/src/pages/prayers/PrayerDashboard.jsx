import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPrayers, deletePrayer } from '../../app/action/prayers';
import moment from 'moment';

function PrayerDashboard() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const prayer = useSelector(state => state.prayers)
    useEffect(() => {
        setLoading(true);
        dispatch(getPrayers()).then(() => {
            setLoading(false);
        }, (error) => {
            console.log(error);
            setLoading(false);
        })
    }, [])
    function handleDeletePrayer(id) {
        setLoading(true);
        dispatch(deletePrayer(id)).then(() => {
            setLoading(false);
        }, (error) => {
            console.log(error)
            setLoading(false);
        })
    }

    return (
        <div className="prayer-container">
           <hr />
               <div>
                   {!loading ?
                       <table className="prayer-table">
                           <tr>
                               <th>Title</th>
                               <th>Description</th>
                               <th>Type</th>
                               <th>Answered</th>
                               <th>Date Created</th>
                               <th>Actions:</th>
                           </tr>
                           {prayer?.length > 0 ? prayer.map(prayer => (
                               <tr>
                                   <td>{prayer?.title}</td>
                                   <td>{prayer?.description}</td>
                                   <td>{prayer?.type}</td>
                                   <td>{prayer?.answered ? 'Answered!' : 'Ongoing'}</td>
                                   <td>{moment(prayer?.createdAt).format('DD-MM-YY, hh:mm:ss')}</td>
                                   <td>
                                       {loading ? 'Loading...' : <i className="fas fa-trash" onClick={() => handleDeletePrayer(prayer?._id)} />}{' '}
                                       <i className="far fa-edit" />
                                   </td>
                               </tr>
                           )) : <p>Cannot find Prayers</p>
                           }
                       </table> : <p>Prayer is loading...</p>
                   }
               </div>
        </div>
    );
}

export default PrayerDashboard;
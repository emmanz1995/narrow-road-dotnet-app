import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPrayers, deletePrayer } from '../../app/action/prayers';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function PrayerDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const prayer = useSelector(state => state.prayers);
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
           <div className="prayer-header">
               <h4>Your Prayers</h4>
               <button className="btn-submit" onClick={() => navigate('/create-prayer')}>Create Prayer</button>
           </div>
               <div>
                   {!loading ?
                       <div className="prayer-flex-card">
                           {prayer?.length > 0 ? prayer?.map(prayer => (
                               <div className="card" key={prayer?._id}>
                                   <div className="card-header">
                                       <h4>{prayer?.title}</h4>
                                       <span>
                                           {loading ? 'Loading...' : <i className="fas fa-trash" onClick={() => handleDeletePrayer(prayer?._id)} />}{' '}
                                           <i className="far fa-edit" onClick={()=> navigate(`/update-prayer/${prayer?._id}`)} />
                                       </span>
                                   </div>
                                   <div className="card-body">
                                       <p>{prayer?.description}</p>
                                       <span>
                                           <em style={{ color: 'grey' }}>Prayed at:</em><p>{moment(prayer?.createdAt).format('DD-MM-YY, hh:mm')}</p>
                                       </span>
                                   </div>
                               </div>
                           )) : <p>Prayer requests not found!</p>}
                       </div> : <p>Prayer is loading...</p>
                       // <table className="prayer-table">
                       //     <tr>
                       //         <th>Title</th>
                       //         <th>Description</th>
                       //         <th>Type</th>
                       //         <th>Answered</th>
                       //         <th>Date Created</th>
                       //         <th>Actions:</th>
                       //     </tr>
                       //     {prayer?.length > 0 ? prayer.map(prayer => (
                       //         <tr>
                       //             <td>{prayer?.title}</td>
                       //             <td>{prayer?.description}</td>
                       //             <td>{prayer?.type}</td>
                       //             <td>{prayer?.answered ? 'Answered!' : 'Ongoing'}</td>
                       //             <td>{moment(prayer?.createdAt).format('DD-MM-YY, hh:mm:ss')}</td>
                       //             <td>
                       //                 {loading ? 'Loading...' : <i className="fas fa-trash" onClick={() => handleDeletePrayer(prayer?._id)} />}{' '}
                       //                 <i className="far fa-edit" onClick={()=> navigate(`/update-prayer/${prayer?._id}`)} />
                       //             </td>
                       //         </tr>
                       //     )) : <p>Cannot find Prayers</p>
                       //     }
                       // </table> : <p>Prayer is loading...</p>
                   }
               </div>
        </div>
    );
}

export default PrayerDashboard;

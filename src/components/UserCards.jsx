import React from 'react'
import { removeUserFromFeed } from '../utils/feedSlice';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const UserCards = ({user}) => {
const {_id, firstName,lastName,photoUrl,gender,age,about} = user;
const dispatch = useDispatch();

    const handleSendRequest = async (status,userId) => {
      try{
       const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId , {} , {withCredentials : true});
       dispatch(removeUserFromFeed(userId));
      }
      catch(err){
      console.log(err);
      }
    };

  return (
    user && (
    <div className="card bg-base-300 w-96  shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} { lastName }</h2>
  {age && gender&&(  <h2 className="card-title">{age} { gender }</h2> )}
    <p>{about}</p>
    <div className="card-actions justify-center  my-6">
      <button className="btn btn-secondary" onClick={()=> handleSendRequest("ignored", _id)}>Ignore</button>
      <button className="btn btn-primary"  onClick={()=> handleSendRequest("interested", _id)}>Interested</button>
    </div>
  </div>
</div>
    )
  );

};

export default UserCards;

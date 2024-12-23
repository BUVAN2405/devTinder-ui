import React from 'react'

const UserCards = ({user}) => {
const {firstName,lastName,photoUrl,gender,age,about} = user;

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
      <button className="btn btn-secondary">Ignore</button>
      <button className="btn btn-primary">Interested</button>
    </div>
  </div>
</div>
    )
  );

};

export default UserCards;

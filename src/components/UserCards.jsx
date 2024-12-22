import React from 'react'

const UserCards = ({user}) => {
const {firstName,lastName,gender,photoUrl} = user;

  return (
    user && (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}</h2>
    <p>Looking for new friend</p>
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

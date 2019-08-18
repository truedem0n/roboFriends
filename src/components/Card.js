import React from "react";


const Card=function({name,email,id}){
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img draggable="false" src={`https://robohash.org/${id}?200x200`} alt="person"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
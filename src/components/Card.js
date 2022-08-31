import React from "react";

function Card({ card: { name, link, likes }, card, ...props }) {

   const handleClick = () => {
      props.onCardClick(card);
   };

   return(
      <li className="element">
         <button type="button" className="element__delete-button" onClick={props.onDeleteBtnClick}></button>
         <img src={link} className="element__image" alt={name} onClick={handleClick}/>
         <div className="element__description">
            <h2 className="element__title">{name}</h2>
            <div className="element__like">
               <button type="button" className="element__like-button"></button>
               <span className="element__like-counter">{likes.length}</span>
            </div>
         </div>
      </li>
   )
}

export default Card;
import React, { useState } from 'react';
import Card from './Card';
import api from '../utils/api'

function Main(props) {

   const [userName, setUserName] = useState();
   const [userDescription, setUserDescription] = useState();
   const [userAvatar, setUserAvatar] = useState();

   const [cards, setCards] = useState([]);
   

   React.useEffect(() => {
      Promise.all([api.getUserData(), api.getInitialCards()
      ])
      .then(([userDataResult, cardsResult]) => {
         setUserName(userDataResult.name);
         setUserDescription(userDataResult.about);
         setUserAvatar(userDataResult.avatar);
         setCards(cardsResult);
      })
      .catch(error => {
         console.log(error);
      })
   }, [])


   return(
      <main className="content">
         <section className="profile">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
               <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}></button>
            </div>
            <div className="profile__info">
               <h1 className="profile__name">{userName}</h1>
               <p className="profile__description">{userDescription}</p>
               <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
         </section>
         <section className="elements">
            <ul className="elements__list">
            {cards.map(card => {
               return(
                  <Card 
                  onCardClick={props.onImage}
                  onDeleteBtnClick={props.onDeleteBtn}
                  card={card} 
                  key={card._id}
                  />
               )
            })}
            </ul>
         </section>
      </main>
   )
}

export default Main;
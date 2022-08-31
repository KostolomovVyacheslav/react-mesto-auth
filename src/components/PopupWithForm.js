import React from 'react';

function PopupWithForm(props) {

   const stateFormPopupClass = `${props.isOpen && 'popup_opened'}`;
   const buttonText = `${props.buttonText ? `${props.buttonText}` : 'Сохранить'}`

   return(
      <div className={`popup ${stateFormPopupClass}`}>
         <div className="popup__container">
         <button type="button" className="popup__close-button" onClick={props.onClose}></button>
         <form id={props.formId} name={props.name} className="popup__form" noValidate autoComplete="off">
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button type="submit" id={props.buttonId} className="popup__save-button" disabled>{buttonText}</button>
         </form>
         </div>
      </div>
   )
}

export default PopupWithForm;
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';

function App() {

  // Закрытие всех попапов
  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeletePopupOpen(false);
    setImagePopup(false);
  };

  
  // Открытие попапов редактирования аватара, профиля, добавления новой карточки
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleDeleteCardClick = () => {
    setDeletePopupOpen(true);
  };


  // Попап карточки
  const [selectedCard, setSelectedCard] = useState(null);
  const [isImagePopupOpen, setImagePopup] = useState(false);

  const handleCardClick = (target) => {
    setImagePopup(true);
    setSelectedCard(target);
  };

  return (
    <div className="page">

      <Header />

      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onDeleteBtn={handleDeleteCardClick}
        onImage={handleCardClick}
        card={selectedCard}
      />      

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title={'Обновить аватар'}
        name={'avatar-form'}
        formId={'#avatar-update-form'}
        buttonId={'#avatar-form-save-button'}
      >
        <input className="popup__input popup__input_avatar-link" name="inputAvatarLink" type="url" placeholder="Ссылка на картинку" required/>
        <span className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title={'Редактировать профиль'}
        name={'edit-form'}
        formId={'#edit-form'}
        buttonId={'#profile-form-save-button'}
      >
        <input className="popup__input popup__input_name" name="inputUserName" type="text" placeholder="Как Вас зовут?" minLength="2" maxLength="40" required />
        <span className="popup__input-error"></span>
        <input className="popup__input popup__input_job" name="inputUserJob" type="text" placeholder="Расскажите о себе..." minLength="2" maxLength="200" required />
        <span className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title={'Новое место'}
        name={'img-form'}
        formId={'#add-img-form'}
        buttonId={'#add-form-save-button'}
      >
        <input className="popup__input popup__input_img-name" name="inputImgName" type="text" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__input-error"></span>
        <input className="popup__input popup__input_img-link" name="inputImgLink" type="url" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isDeletePopupOpen}
        onDeleteBtn={handleDeleteCardClick}
        onClose={closeAllPopups}
        title={'Вы уверены?'}
        name={'delete-form'}
        formId={'#delete-img-form'}
        buttonnId={'#delete-form-confirm-button'}
        buttonText={'Да'}
      >
      </PopupWithForm>
      
      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <Footer />
      
    </div>
  );
}

export default App;
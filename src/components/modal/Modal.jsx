import React,{ useState } from 'react'; // Combining React and useState import
import './Modal.css'; //Importing CSS for styling the modal
import { ReactComponent as Xmark } from '../../assets/xmark.svg'; // Importing SVG as a React component
import ModalImage from '../../assets/modalpic.jpg'; // Importing an image for the modal

function Modal() {

  const [isModalOpen, setIsModalOpen] = useState(true);   // State to manage modal visibility

  // Function to close the modal
  function closeModal(){
    setIsModalOpen(false);
  }

  return (
    <div className= {isModalOpen? 'modal':'modal--hidden' }>
      <div className={'modal__container' }>
        <div className='modal__close' onClick={closeModal}>
          <Xmark className="modal__close-icon" /> 
        </div>
        <div className='modal__image' >
          <img src={ModalImage} alt='Debate win Congratulations' ></img>
        </div>
      </div>
      
      
    </div>
  )
}

export default Modal; // Exporting the Modal component
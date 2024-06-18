// React imports, Combining React and useState import
import React,{ useState } from 'react'; 

// Style imports
import './Modal.css'; 

// Importing SVG, image
import { ModalXMark, modalImage  } from '../../assets/assets.js';

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
          <p>Close</p>
          <ModalXMark className="modal__close-icon" /> 
        </div>
        <div className='modal__image' >
          <img src={modalImage} alt='Debate win Congratulations' ></img>
        </div>
      </div>
      
      
    </div>
  )
}

export default Modal; // Exporting the Modal component
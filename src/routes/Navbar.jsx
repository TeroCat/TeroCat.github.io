import Modal from './Modal.jsx';
import { useState } from 'react';


export default function Bar(){
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return(
    <>
      <div className="topnav">
        <a href="/home" target="">Home</a>
        <a href="" target="">Shopping</a>
        <a href="" target="">Articles</a>
        <button className="button" onClick={openModal}>About</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>About WetFeed</h2>
        <p>WetFeed as a beacon for the masses began as a vision.<br /> In 2024, like-minded individuals  came together and, with a united goal, set about informing and entertaining <br/>
          pleople around the world, providing  access to information about cats, politics and the entertainment industry.</p>
      </Modal>
      </div>
      

    </>

  );
}

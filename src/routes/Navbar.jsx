import Modal from './Modal.jsx';
import { useState } from 'react';
import bars from '../images/bars.jpg';
import '../index.css';


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
        <a href="" target="">Articles</a>
        <button className="button" onClick={openModal}>About</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>About WetFeed</h2>
        <p>WetFeed as a beacon for the masses began as a vision.<br /> In 2024, like-minded individuals  came together and, with a united goal, set about informing and entertaining <br/>
          people around the world, providing  access to information about cats, politics and the entertainment industry. <br /> </p>
        <p>Since our inception many moons ago, we have faced countless acts of discrimination, and harrassment by both thosed opposed to our message, and with local authority.<br /></p>
        <img src={bars} alt="Cat" />
        <p>Since then, our duties have grown and grown with much of our staff and mission coming and going. We have seen much of our staff grow out of our small shoes, on to better things. <br/>
        We&apos;ve had many successes in our times, and continue to act for the best interest of our supporters, and our journalistic peers.</p>
      </Modal>
      </div>
      

    </>

  );
}

import React from 'react';
import { Modal } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import './index.scss';

const ModalMenu = ({ showModal, handleToggleModal }) => {
    return (
        <Modal 
            show={showModal} 
            onHide={handleToggleModal} 
            centered
            dialogClassName='modal-fullscreen'
            size="fullscreen"
            className={`fade ${showModal ? 'show' : ''}`}
        >
            <Modal.Header closeButton>
                <Modal.Title><img src='logo.svg' className='navbar__logo' /></Modal.Title>
                <button className="close-button" onClick={handleToggleModal}>
                    <img src='closeButton.svg'/>
                </button>
            </Modal.Header>
            <Modal.Body>
            <Link to="/" className='navbar__custom'>Home</Link>
            <a href="#sobre" className='navbar__custom'>Sobre</a>
            <a href="#visao-missao" className='navbar__custom'>Missão e Visão</a>
            <a href="#valores" className='navbar__custom'>Valores</a>
            <a href="#equipe" className='navbar__custom'>Equipe</a>
            <a href="#servicos" className='navbar__custom'>Serviços</a>
            <Link to="/blog" className='navbar__custom'>blog</Link>
            <Link to="/form" className='navbar__custom'>Fale Conosco</Link>
            </Modal.Body>
            <Modal.Footer>
                <h1>Contatos</h1>
                <div>
                    <div className='navbar__footerMenu'>
                            <h4>Telefone: (00) 1234-5678</h4>
                    </div>
                    <div className='navbar__footerMenu'>
                        <h4>E-mail: AndreSilva@innovarq.com</h4>
                    </div>
                </div>                                    
            </Modal.Footer>
        </Modal>
    );
}

export default ModalMenu;

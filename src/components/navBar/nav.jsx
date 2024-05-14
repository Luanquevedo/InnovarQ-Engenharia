import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom'; 
import './index.scss';
import ModalMenu from '../modalmenu/modalMenu';

const Nav = ({ isMobileProp, showModalProp, handleToggleModalProp, renderLinksProp }) => {
    const [isMobile, setIsMobile] = useState(isMobileProp);
    const [showModal, setShowModal] = useState(showModalProp);
    const [renderLinks, setRenderLinks] = useState(renderLinksProp);

    // Memoiza a função checkIsMobile para evitar demora de reload
    const checkIsMobile = useMemo(() => () => {
        const mediaQuery = window.matchMedia('(max-width:1099px)');
        setIsMobile(mediaQuery.matches);
        setRenderLinks(true);
    }, []);

    useEffect(() => {
        checkIsMobile(); // Chamada inicial para definir o estado ao montar o componente

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <img src='logo.svg' className='navbar__logo' alt='Logo' />
                <h1>InnovarQ Engenharia</h1>
            </div>
            <div className='navbar__container'>
                {isMobile ? (
                    <>
                        <button onClick={handleToggleModal}>
                            <img src='mobileMenuIcon.svg' className='navbar__mobile-icon' alt='Mobile Icon' />
                        </button>

                        {showModal && <ModalMenu showModal={showModal} handleToggleModal={handleToggleModal} />}
                    </>
                ) : (
                    renderLinks && (
                        <>
                            <Link to="/" className='navbar__custom'>Home</Link>
                            <a href="#sobre" className='navbar__custom'>Sobre</a>
                            <a href="#visao-missao" className='navbar__custom'>Missão e Visão</a>
                            <a href="#valores" className='navbar__custom'>Valores</a>
                            <a href="#equipe" className='navbar__custom'>Equipe</a>
                            <a href="#servicos" className='navbar__custom'>Serviços</a>
                            <Link to="/blog" className='navbar__custom'>blog</Link>
                            <Link to="/form" className='navbar__custom'>Fale Conosco</Link>
                        </>
                    )
                )}
            </div>
        </nav>
    );
}

export default Nav;

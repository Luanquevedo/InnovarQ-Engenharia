import React, { useState } from 'react';
import Nav from '../../components/navBar/nav';
import Footer from '../../components/footer/footer';
import './index.scss'
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.sheetmonkey.io/form/rFMyShojBLhpd34Ja7K5Lm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Aqui você pode adicionar a lógica para lidar com a resposta da API, se necessário
        console.log('Dados enviados com sucesso!');
        // Resetando o formulário após o envio
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        console.error('Erro ao enviar os dados.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <>
    <Nav/>
    <main className='Form'>
      
      <form onSubmit={handleSubmit} className='Form__container'>
        <div className='Form__a'>
          <label htmlFor="name">Nome:</label>
          <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          </div>
        </div>
        <div className='Form__b'>
          <label htmlFor="email">Endereço de E-mail:</label>
          <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          </div>
        </div>
        
        <div className='Form__c'>
          <label htmlFor="phone">Celular:</label>
          <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          </div>
        </div>
        <div className='Form__d'>
          <label htmlFor="message">Mensagem:</label>
          <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          </div>
        </div>
        <button type="submit">Enviar sua mensagem</button>
      </form>
      
    </main>
    <Footer/>
    </>
  );
};

export default Form;

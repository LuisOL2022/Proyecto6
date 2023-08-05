import React from 'react';

const ContactSection = () => {
  return (
    <div className="container mt-4 bg-primary bg-gradient text-white">
      <h2>CONTACTO</h2>
      <p>Para cualquier consulta o colaboración, no dudes en contactarme:</p>
      <ul>
        <li>
          <strong>Correo electrónico:</strong>{' '}
          <a href="mailto:tu_correo@gmail.com" className='text-dark'>luisolivares.r717@gmail.com</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{' '}
          <a href="https://wa.me/1234567890" className='text-dark'>+56956087515</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer" className='text-dark'>Tu Perfil de LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactSection;

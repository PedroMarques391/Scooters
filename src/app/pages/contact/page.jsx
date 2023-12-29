import React from 'react';

function Contact() {
  return (
    <>
      <section className="flex flex-col md:flex-row md:w-4/5 items-center mx-auto mt-28 md:mt-40 text-gray-300">
        <div className="md:w-2/5 flex flex-col items-center">
          <h1 className="font-bold text-3xl tracking-wider uppercase mb-5">Estamos aqui!!</h1>
          <p className="uppercase text-xl font-mono tracking-wide mt-2 font-bold">Scooters</p>
          <p className="uppercase text-xl font-mono tracking-wide mt-2 font-bold">Umarizal - 66.055-280</p>
          <p className="uppercase text-xl font-mono tracking-wide mt-2 font-bold">Belém - Pará</p>
          <p className="uppercase text-xl font-mono tracking-wide mt-2 font-bold mb-5">+55 (91) 98888-8888</p>
        </div>
        <div className="md:w-3/5">
          <iframe
            title="Scooters"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.23604613241!2d-48.50542577877972!3d-1.4395893154986739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48ea5cd39c593%3A0xac3ab1a160284012!2sUmarizal%2C%20Bel%C3%A9m%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1703721082243!5m2!1spt-BR!2sbr"
            width="100%"
            height="580"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

export default Contact;

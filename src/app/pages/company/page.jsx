import React from 'react';

function Company() {
  return (
    <>
      <section className="w-[90%] md:w-4/5 mt-36 mx-auto">
        <div className="container bg-[#333333] text-white">
          <h1 className="font-bold text-4xl text-center text-[#8B0000] pt-5">Scooters</h1>
          <div className="py-5 md:w-2/5 mx-auto">
            <h1 className="pl-4 md:pl-0 font-bold text-2xl">Onde estamos?</h1>
            <p className="pl-4 py-1 font-medium">Umarizal, Belém - PA</p>
            <p className="pl-4 py-1 font-medium">(91) 1234-5678</p>
            <p className="pl-4 py-1 font-medium">Travessa dos Coqueiros, 789, Bairro Nova Ananindeua, Ananindeua - PA</p>
            <p className="pl-4 py-1 font-medium">(91) 2345-6789</p>
            <p className="pl-4 py-1 font-medium">Rua das Palmeiras, 456, Bairro Jardim Marituba, Marituba - PA</p>
            <p className="pl-4 py-1 font-medium">(91) 3456-7890</p>
            <p className="pl-4 py-1 font-medium">Av. das Mangueiras, 101, Bairro Centro, Benevides - PA</p>
            <p className="pl-4 py-1 font-medium">(91) 4567-8901</p>
            <p className="pl-4 py-1 font-medium">Rua das Acácias, 210, Bairro Jardim Castanhal, Castanhal - PA</p>
            <p className="pl-4 py-1 font-medium">(91) 5678-9012</p>
          </div>
          <section className="py-5 w-[90%] md:w-2/5 mx-auto text-lg leading-9 md:text-justify">
            A Scooters, foi fundada em 2018, é uma empresa
            especializada na Revenda de scooters
            de alta qualidade e performance. Com sedes estrategicamente localizadas em Belém,
            Marituba, Ananindeua, Benevides
            e Castanhal, a empresa busca oferecer soluções de mobilidade eficientes
            e sustentáveis para seus clientes. Nossa
            missão é proporcionar aos nossos clientes
            uma experiência única de mobilidade urbana, oferecendo scooters inovadoras,
            econômicas e ecologicamente responsáveis,
            contribuindo para um estilo de vida mais prático e sustentável.
          </section>
          <section className="py-5 w-[90%] md:w-2/5 mx-auto text-lg md:text-justify">
            <h1 className="text-center font-bold text-3xl my-5">Nossos valores</h1>
            <div>
              <p className="p-2">
                Inovação: Buscamos
                constantemente novas tecnologias
                e designs inovadores para oferecer produtos de última geração aos nossos clientes.
              </p>
              <p className="p-2">
                Sustentabilidade: Comprometemo-nos a promover
                práticas e produtos que minimizem nosso impacto ambiental, promovendo a
                sustentabilidade em cada aspecto de nossos negócios.
              </p>
              <p className="p-2">
                Atendimento ao Cliente:
                Valorizamos a satisfação do cliente,
                buscando superar expectativas e oferecer um atendimento personalizado e eficiente.
              </p>
              <p className="p-2">
                Ética: Agimos com integridade, transparência e
                responsabilidade em todas as nossas
                operações, promovendo relações de confiança com
                clientes, parceiros e colaboradores.
              </p>
              <p className="p-2">
                Comunidade: Contribuímos positivamente
                para as comunidades onde estamos inseridos,
                promovendo ações sociais e sendo agentes ativos de
                desenvolvimento local.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Company;

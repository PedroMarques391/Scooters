'use client';

import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

function Faq() {
  const [openQuestion1, setOpenQuestion1] = useState(true);
  const [openQuestion2, setOpenQuestion2] = useState(false);
  const [openQuestion3, setOpenQuestion3] = useState(false);
  const [openQuestion4, setOpenQuestion4] = useState(false);

  const handleClick = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        setOpenQuestion1(!openQuestion1);
        setOpenQuestion2(false);
        setOpenQuestion3(false);
        setOpenQuestion4(false);
        break;
      case 2:
        setOpenQuestion2(!openQuestion2);
        setOpenQuestion1(false);
        setOpenQuestion3(false);
        setOpenQuestion4(false);
        break;
      case 3:
        setOpenQuestion3(!openQuestion3);
        setOpenQuestion1(false);
        setOpenQuestion2(false);
        setOpenQuestion4(false);
        break;
      case 4:
        setOpenQuestion4(!openQuestion4);
        setOpenQuestion2(false);
        setOpenQuestion1(false);
        setOpenQuestion3(false);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <section className="w-4/5 mt-36 mx-auto selection:select-none md:h-[60vh] text-gray-300">
        <h1 className="text-center font-bold text-3xl">Perguntas Frequentes</h1>
        <p className="mt-5 text-center text-lg font-serif">
          Disponibilizamos abaixo uma lista de perguntas que poderão ajudá-lo
          a esclarecer qualquer dúvida que possa ter.

        </p>
        <ul>
          <li onClick={() => handleClick(1)} className="font-bold text-4xl my-10 flex w-full justify-between">
            <p>Onde encontro os produtos?</p>
            {openQuestion1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
          <p className={`text-lg p-2 ${!openQuestion1 && 'hidden'}`}>Todos os produtos são encontrados no site oficial das lojas.</p>

          <li onClick={() => handleClick(2)} className="font-bold text-4xl my-10 flex justify-between">
            <p>O que é uma Scooter?</p>
            {openQuestion2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
          <p className={`text-lg p-2 ${!openQuestion2 && 'hidden'}`}>
            Veículo de duas rodas,
            accionado por um pequeno motor, de forma
            análoga à motocicleta, mas provido de um
            assento em lugar de selim de montar, e com rodas de menor diâmetro.
          </p>

          <li onClick={() => handleClick(3)} className="font-bold text-4xl my-10 flex justify-between">
            <p>Preciso de Habilitação para pilotar uma Scooter?</p>
            {openQuestion3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
          <p className={`text-lg p-2 ${!openQuestion3 && 'hidden'}`}>
            Sim, você precisa de habilitação.
          </p>

          <li onClick={() => handleClick(4)} className="font-bold text-4xl my-10 flex justify-between">
            <p>Onde posso encontrá los? </p>
            {openQuestion4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
          <p className={`text-lg p-2 ${!openQuestion4 && 'hidden'}`}>
            Estamos localizados em Belém, Ananindeua, Marituba, Benevides e Castanhal.
          </p>

        </ul>
      </section>
    </>
  );
}

export default Faq;

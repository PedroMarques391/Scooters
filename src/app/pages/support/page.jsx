import Link from 'next/link';
import React from 'react';

function Support() {
  return (
    <>
      <section className="container mt-36 mx-auto flex justify-center ">
        <div className="w-4/5 flex flex-col md:h-[60vh]">
          <h1 className="font-bold text-4xl gap-10 text-center uppercase text-gray-200">Suporte</h1>
          <div className="flex flex-col md:flex-row justify-center mt-20">
            <Link href="/pages/support/faq" className="md:m-3 mt-5 p-3 w-full md:w-56 text-center uppercase font-bold bg-[#8B0000] text-gray-300">{'F.A.Q >'}</Link>
            <Link href="/pages/support/manual" className="md:m-3 mt-5 p-3 w-full md:w-56 text-center uppercase font-bold bg-[#8B0000] text-gray-300">{'Manual de Usuário >'}</Link>
            <Link href="/" className="md:m-3 mt-5 p-3 w-full md:w-56 text-center uppercase font-bold bg-[#8B0000] text-gray-300">{'Garantia Legal >'}</Link>
          </div>
          <div className="px-2 py-10 md:p-14 bg-[#333333] mt-16">
            <h1 className="text-center uppercase tracking-wider font-mono text-xl text-gray-200">Requisição de Garantia</h1>
            <div className="mt-10 md:w-3/5 mx-auto">
              <select className="p-4 w-full select-none bg-gray-400 text-white">
                <option value="0">Onde você comprou seu produto?</option>
                <option value="1">Belém</option>
                <option value="2">Ananindeua</option>
                <option value="3">Marituba</option>
                <option value="4">Benevides</option>
                <option value="5">Castanhal</option>
              </select>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Support;

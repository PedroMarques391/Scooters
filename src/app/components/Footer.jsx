import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-[#8B0000] py-10 h-auto mt-16">
      <div className="flex flex-row justify-center items-center">
        <div className="w-full text-center uppercase font-bold text-2xl">
          <Link href="/pages/company" className="py-2">A Empresa</Link>
        </div>
        <div className="w-full text-center uppercase font-bold text-2xl">
          <Link href="/pages/support" className="py-2">Suporte</Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center pt-5">
        <p className="text-center py-5 text-sm text-white">&copy;Scooters 2023 - Todos os Direitos Reservados</p>
      </div>

    </footer>
  );
}

export default Footer;

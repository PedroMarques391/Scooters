import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Scooters',
  description: 'Página inicial de uma loja de motos eletricas,',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#444]">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

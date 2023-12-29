import React from 'react';
import Country from '@/app/components/Country';

function Manual() {
  return (
    <>
      <section className="w-4/5 mx-auto mt-36">
        <h1 className="font-bold text-4xl text-center text-gray-300">Manual</h1>
        <div className="mt-10 bg-[#333333] p-5 md:px-16 container text-white">
          <Country
            img="/images/ita.jpg"
            imgAlt="Bandeira"
            description="Per un utilizzo corretto del prodotto è
              indispensabile leggere e comprendere
              il manuale d`uso e manutenzione. I
              n un`ottica sempre più green puoi scaricarlo in digitale."
          />

          <Country
            img="/images/eng.jpg"
            imgAlt="Bandeira"
            description="For correct use of the product it is mandatory to
              read and understand the user
              and maintenance manual. With an ever greener perspective, you can
              download it in digital format."
          />
          <Country
            img="/images/esp.jpg"
            imgAlt="Bandeira"
            description="Para un correcto uso del
              producto es imprescindible leer y comprender el manual de uso y mantenimiento.
              En una perspectiva
              cada vez más ecológica,
              puede descargarlo digitalmente.."
          />

          <Country
            img="/images/fr.jpg"
            imgAlt="Bandeira"
            description="Pour une utilisation correcte
              du produit, il est indispensable de
              lire et comprendre le manuel d`utilisation et d`entretien.
              D`un point de vue toujours plus
              écologique, vous pouvez le télécharger."
          />

          <Country
            img="/images/te.jpg"
            imgAlt="Bandeira"
            description=" Für den korrekten Gebrauch des
              Produkts ist es zwingend erforderlich, das Benutzer- und Wartungshandbuch zu lesen und
              zu verstehen. Mit einer immer grüneren
              Perspektive können Sie es im digitalen Format herunterladen."
          />

          <Country
            img="/images/pl.jpg"
            imgAlt="Bandeira"
            description="W celu prawidłowego użytkowania
              produktu obowiązkowe jest przeczytanie i
              zrozumienie instrukcji obsługi i konserwacji. Dzięki
              coraz bardziej ekologicznej
              perspektywie możesz go pobrać w formacie cyfrowym."
          />

          <Country
            img="/images/rc.jpg"
            imgAlt="Bandeira"
            description="Pro správné použití výrobku je
              povinné přečíst si a porozumět návodu k
              použití a údržbě. Díky stále zelenější perspektivě si jej
              můžete stáhnout v digitálním formátu."
          />

          <Country
            img="/images/sl.jpg"
            imgAlt="Bandeira"
            description="Pre správne používanie výrobku
              je povinné prečítať si návod
              na obsluhu a údržbu a porozumieť im. So stále zelenšou
              perspektívou si
              ho môžete stiahnuť v digitálnom formáte."
          />
          <Country
            img="/images/pr.jpg"
            imgAlt="Bandeira"
            description="Para o correto uso do produto é
              obrigatória a leitura
              e compreensão do manual do usuário e de manutenção. Com uma perspectiva
              cada vez mais ecológica,
              você pode baixá-lo em formato digital."
          />

          <Country
            img="/images/gr.jpg"
            imgAlt="Bandeira"
            description="Για σωστή χρήση
              του προϊόντος είναι υποχρεωτική η
              ανάγνωση και η κατανόηση του εγχειριδίου χρήσης και συντήρησης.
              Με μια πιο πράσινη προοπτική, μπορείτε να το
              κατεβάσετε σε
              ψηφιακή μορφή."
          />

          <Country
            img="/images/sl.jpg"
            imgAlt="Bandeira"
            description="Za pravilno uporabo izdelka morate
              obvezno prebrati in razumeti
              navodila za uporabo in
              vzdrževanje. Z vedno bolj zeleno perspektivo ga
              lahko prenesete v digitalni obliki"
          />

          <Country
            img="/images/ser.jpg"
            imgAlt="Bandeira"
            description="Za ispravnu
              upotrebu proizvoda
              obavezno pročitajte i razumejte uputstvo
              za upotrebu i održavanje. Sa sve zelenijom perspektivom, možete
              ga preuzeti u digitalnom formatu."
          />

        </div>
      </section>

    </>
  );
}

export default Manual;

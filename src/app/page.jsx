'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Product from './components/Product';

export default function Home() {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 4,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: -1500,
        transition: {
          type: 'spring',
          duration: 2,
        },
      });
    }
  }, [inView]);

  return (
    <>
      <div className="mb-12 my-[95px] md:my-[100px] lg:my-[200px] ">
        <section className="flex justify-center items-center">
          <div className="w-full lg:max-w-[1440px] mx-auto p-8 bg-[#a0a0a0] text-white border-transparent">
            <Product
              mainTitle="Yamaha Neo 125 UBS"
              description="A Neo é uma moto automática de 125cc com apenas 97 kg e 9,8 cv, ela é a escolha perfeita para uma pilotagem ágil e fácil no seu dia a dia. Quer frear com mais segurança? O sistema UBS aciona os dois freios por meio do uso do freio traseiro, parando a scooter em espaços mais curtos. Além de ser uma moto automática, a NEO 125 UBS conta com as maiores rodas da categoria, passando por buracos e imperfeições do asfalto com mais conforto e controle. Com visual agressivo e faróis de LED, a NEO 125 UBS ilumina o seu caminho com mais eficiência e atrai olhares por onde você passar."
              price="12.290,00"
              stockQuantity="Várias"
              productCategory="Scooter Automática"
              CTALink="https://www.yamaha-motor.com.br/neo-125-ubs/product/30083"
              SKU="YMH-125-238ZS"
              img1="/images/neo-2.jpg"
              imgAlt1="neo 1"
              img2="/images/neo-3.jpg"
              imgAlt2="neo 2"
              img3="/images/neo-4.jpg"
              imgAlt3="neo 3"
              img4="/images/neo-2.jpg"
              imgAlt4="neo 4"
              img5="/images/neo-3.jpg"
              imgAlt5="neo 5"
              img6="/images/neo-4.jpg"
              imgAlt6="neo 6"
            />
          </div>
        </section>
      </div>

      <div ref={ref}>
        <motion.div
          animate={animation}
          className="mb-12 my-[95px] md:my-[100px] lg:my-[200px]"
        >
          <section className="flex justify-center items-center">
            <div className="w-full lg:max-w-[1440px] mx-auto p-8 bg-[#a0a0a0] text-white border-transparent">
              <Product
                mainTitle="Yamaha XMAX ABS"
                description="Trabalhando em conjunto com os freios ABS para garantir mais segurança na sua pilotagem, o controle de tração impede a perda de tração da roda traseira em condições de baixa aderência, como em dias de chuva, ou em acelerações bruscas. Muito mais segurança e tranquilidade no seu dia a dia. A XMAX ABS é uma moto automática que tem espaço de sobra para tudo que você precisa. Capaz de comportar até dois capacetes grandes, o compartimento sob o amplo assento também possui iluminação interna de LED, mais um toque de sofisticação da Sport Premium Scooter. Sofisticado, arrojado e moderno, o design da XMAX ABS carrega o DNA premium da MAX Series. Em seu lançamento na Europa ganhou dois dos maiores prêmios de design: O Red Dot Design Awards, na categoria Design de Produto, e o iF Design Award, atribuído pela iF International Forum Design."
                price="30.990,00"
                stockQuantity="Várias"
                productCategory="Scooter Automática"
                CTALink="https://www.yamaha-motor.com.br/xmax-abs/product/30098"
                SKU="YMH-260-380XM"
                img1="/images/xmax-1.jpg"
                imgAlt1="xmax 1"
                img2="/images/xmax-2.jpg"
                imgAlt2="xmax 2"
                img3="/images/xmax-3.jpg"
                imgAlt3="xmax 3"
                img4="/images/xmax-1.jpg"
                imgAlt4="xmax 4"
                img5="/images/xmax-2.jpg"
                imgAlt5="ADVENTURER 5"
                img6="/images/xmax-3.jpg"
                imgAlt6="xmax 6"
              />
            </div>
          </section>
        </motion.div>
      </div>
      <div className="mt-[95px] md:mt-[100px] lg:mt-[200px]">
        <section className="flex justify-center items-center">
          <div className="w-full lg:max-w-[1440px] mx-auto p-8 bg-[#a0a0a0] text-white">
            <Product
              mainTitle="Honda X-ADV"
              description="A X-ADV deu o primeiro passo. Abriu caminho. E assumiu a liderança. Ao combinar as capacidades e o desempenho de uma moto de aventura com o conforto, a comodidade e a facilidade de deslocamento de uma scooter de grande porte, este verdadeiro “SUV de duas rodas” desafia as convenções. A X-ADV é uma exploradora urbana premium, capaz de passar de um quarteirão na cidade para um trajeto fora de estrada (e voltar) num instante, transformando cada trajeto numa experiência única. O eficiente motor bicilíndrico de 750 cc da nova X-ADV traz um significativo aumento de potência principalmente nas baixas e médias rotações, entregando agora 58,6 cv de potência a 6.750 rpm e torque de 7,03 kgf.m a 4.750 rpm. O aumento na potência proporciona uma pilotagem mais divertida no off-road e um fôlego a mais na estrada, sem perder o caráter econômico."
              price="91.780,00"
              stockQuantity="Várias"
              productCategory="Scooter Automática"
              CTALink="https://www.honda.com.br/motos/adventure/scooter/x-adv"
              SKU="HND-759-929AD"
              img1="/images/xadv-1.jpg"
              imgAlt1="xadv 1"
              img2="/images/xadv-2.jpg"
              imgAlt2="xadv 2"
              img3="/images/xadv-3.jpg"
              imgAlt3="xadv 3"
              img4="/images/xadv-4.jpg"
              imgAlt4="xadv 4"
              img5="/images/xadv-5.jpg"
              imgAlt5="xadv 5"
              img6="/images/xadv-6.jpg"
              imgAlt6="xadv 6"
            />
          </div>
        </section>
      </div>
    </>
  );
}

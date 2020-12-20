import Section from "../components/Section";
import Input from '../components/Input';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TitleAndText from '../components/TitleAndText';
import Button from '../components/Button';
import MobileSvg from '../assets/undraw_Mobile_app_p3ts.svg';
import WebDevSvg from '../assets/web_develop.svg';
import ParkSvg from '../assets/undraw_environmental_study_skau.svg';
import WhyChooseUs from '../components/WhyChooseUs';
import BlockInfo from '../components/BlockInfo';
import Link from "next/link";
import Text from '../components/Text';
export default function Home({}) {
  return (
    <>
      <Section bg="white">
            <Title>Servicios digitales para empresas, Pymes y pequeños comercios</Title>
      </Section>


      <Section>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 p-8 rounded-lg lg:order-last">
            <MobileSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TitleAndText title="Desarrollo mobile para IOS y Android" titleColor="red" align="right">
              <p>
                <strong>¡Permite a tus clientes tenerte al alcance de su bolsillo!</strong> Las aplicaciones
                {" "}móviles son herramientas indispensables para impulsar tu empresa incrementando tus
                {" "}posibilidades de conversión. 
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 p-8 rounded-lg">
            <WebDevSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TitleAndText title="Desarrollo de sitios web responsivos, SPA y PWA" titleColor="red" align="left">
              <p>
                Tener un sitio en internet es abrirle las puertas al mundo, no existen límites. <strong>En OriginMaster
                {" "}creamos sitios completamente adaptables para los diferentes dispositivos (desktop, smartphone,
                {" "}tablet & smart TV).
                </strong>
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>


      <Section>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 p-8 rounded-lg lg:order-last">
            <MobileSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TitleAndText title="Desarrollo de sistemas, crm y aplicaciones multiplataformas (Window, Mac y Linux)" titleColor="red" align="right">
              <p>
                Administrar una empresa es dificil, pero podemos ayudarte con <strong>soluciones digitales</strong>, solo
                {" "} debe <Link href="/#contactar"><a>contactarnos</a></Link>.
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 p-8 rounded-lg">
            <WebDevSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TitleAndText title="SEO, para mejorar tu posicionamiento en google, bing y otros" titleColor="red" align="left">
              <p>
                El SEO (Search Engine Optimization) permite posicionar tu sitio en lo más alto de la web, asimismo,
                evita las penalizaciones en los motores de búsqueda más utilizados.
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>

      <Section>
          <Title align="center" h2>Somos soluciones digitales</Title>
          <Text align="center">
            <p>
              Para empreas, pymes y pequeños comercios.
            </p>
            <Link href="/#contactar"><Button link outline>Contactar Ahora</Button></Link>
          </Text>
          
      </Section>

      <Footer full/>
    </>
  );
}

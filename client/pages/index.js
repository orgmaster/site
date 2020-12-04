import Section from "../components/Section";
import Input from '../components/Input';
import Title from '../components/Title'
import TitleAndText from '../components/TitleAndText';
import Button from '../components/Button';
import MainSvg from '../assets/undraw_dev_focus_b9xo.svg';
import DarkCard from "../components/DarkCard";
import StatsSvg from '../assets/undraw_growth_analytics_8btt.svg';
import ParkSvg from '../assets/undraw_environmental_study_skau.svg';
import WhyChooseUs from '../components/WhyChooseUs';
export default function Home({}) {
  return (
    <>
      <Section bg="white" containerClass="flex" className="grid grid-cols-2 mt-auto">
        <div className="col-span-2 sm:col-span-1 mb-5 sm:mb-0 flex flex-col justify-center">
          <div>
            <Title>¿Necesitas digitalizar tu negocio? <mark>Sabemos como hacerlo</mark></Title>
            <div className="mt-8">
              <Button className="w-full lg:w-auto">Contactar</Button>
              <Button className="ml-0 mt-4 lg:mt-0 lg:ml-5 w-full lg:w-auto" outline>Ver trabajos</Button>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 pl-0 md:pl-5">
          <MainSvg className="w-full h-full my-auto" />
        </div>
      </Section>



      <WhyChooseUs />


      <Section bg="white">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-5 bg-indigo-600 p-8 rounded-lg shadow-2xl">
            <StatsSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <TitleAndText title="¡No te quedes atrás, el mundo comercial se está digitalizando!" titleColor="red" align="right">
              <p>
                En <strong>OriginMaster</strong> sabemos que <strong>la digitalización comercial es muy importante</strong> y, la prueba mas evidente,
                es  la situación de emergencia actual (COVID-19). Muchos <strong>comercios y empresas NO digitalizadas luchan contra un terrible baja de ingresos</strong>
                {" "}debido a la poca o nula presencia digital.
              </p>
              <p className="mt-7">
                <strong>Si usted o su empresa está pasando por está situción debe contactenos lo antes posible</strong> y de ese modo, podremos brindarle
                la solución que mayor se adapte a sus necesidades y, por su puesto, su bolsillo.
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>


      <Section>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <TitleAndText title="¡No te quedes atrás, el mundo comercial se está digitalizando!" titleColor="red" align="left">
              <p>
                En <strong>OriginMaster</strong> sabemos que <strong>la digitalización comercial es muy importante</strong> y, la prueba mas evidente,
                es  la situación de emergencia actual (COVID-19). Muchos <strong>comercios y empresas NO digitalizadas luchan contra un terrible baja de ingresos</strong>
                {" "}debido a la poca o nula presencia digital.
              </p>
              <p className="mt-7">
                <strong>Si usted o su empresa está pasando por está situción debe contactenos lo antes posible</strong> y de ese modo, podremos brindarle
                la solución que mayor se adapte a sus necesidades y, por su puesto, su bolsillo.
              </p>
            </TitleAndText>
          </div>
          <div className="col-span-12 lg:col-span-5 bg-green-600 p-8 rounded-lg shadow-2xl">
            <ParkSvg className="w-full h-full my-auto" />
          </div>
        </div>
      </Section>
    </>
  );
}

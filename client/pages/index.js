import Section from "../components/Section";
import Input from '../components/Input';
import Title from '../components/Title'
import TitleAndText from '../components/TitleAndText';
import Button from '../components/Button';
import MainSvg from '../assets/undraw_dev_focus_b9xo.svg';
import DarkCard from "../components/DarkCard";
export default function Home({}) {
  return (
    <>
      <Section bg="white" gradient containerClass="py-10 flex" className="grid grid-cols-2 mt-auto">
        <div className="col-span-2 sm:col-span-1 mb-5 sm:mb-0 flex flex-col justify-center">
          <div>
            <Title>Título con múcho SEO justo aquí</Title>
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



      <Section bg="red" align="center" gradient>
          <Title h2 align="center" color="white">¿Por qué elegirnos?</Title>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <DarkCard title="Feature 1">
                <p>Texto asdsa dasd asd as asd asd asda sdassadasd asdsadas ds</p>
              </DarkCard>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <DarkCard title="Feature 1" lightLevel={2}>
                <p>Texto asdsa dasd asd as asd asd asda sdassadasd asdsadas ds</p>
              </DarkCard>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <DarkCard title="Feature 1" lightLevel={3}>
                <p>Texto asdsa dasd asd as asd asd asda sdassadasd asdsadas ds</p>
              </DarkCard>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <DarkCard title="Feature 1" lightLevel={4}>
                <p>Texto asdsa dasd asd as asd asd asda sdassadasd asdsadas ds</p>
              </DarkCard>
            </div>
          </div>
      </Section>


      <Section>
        <TitleAndText title="el título" titleColor="red" align="right">
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>
        </TitleAndText>
      </Section>
    </>
  );
}

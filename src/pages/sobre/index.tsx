import Title from "../../components/mainTitle";
import Cards from "../../components/menuCard";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center max-[768px]:flex-col max-[504px]:h-[190vh] ">
        <section className="w-[50%] max-[768px]:w-[90%] h-screen flex justify-center items-center  bg-[url('/src/assets/backgroundSobreMim.png')] bg-center bg-no-repeat bg-cover max-[768px]:bg-[url('')]">
          <div className="p-16 max-[768px]:p-3  ">
            <Title
              title={"Sobre mim"}
              titleResponsive={"Sobre mim"}
              subtitle={"Descubra mais sobre mim"}
            />
            <p className="text-base font-medium text-white pr-10 leading-9 max-[768px]:p-1 max-[768px]:leading-1">
              Olá! Eu sou um jovem de 18 anos, residente em Santa Catarina, com
              paixão por tecnologia. Com formação em Análise e Desenvolvimento
              de Sistemas e experiência em JavaScript/TypeScript e UI . Estou
              sempre em busca de novos desafios e oportunidades para aplicar
              meus conhecimentos e habilidades na criação de soluções
              tecnológicas eficientes.
              <br />
              Se você está procurando por um jovem talentoso e apaixonado por
              tecnologia, com habilidades comprovadas em desenvolvimento web,
              não hesite em entrar em contato. Eu estou animado para
              compartilhar meu trabalho e colaborar em projetos inovadores.
            </p>
          </div>
        </section>
        <section className="w-[50vw] h-screen flex justify-center items-center">
          <div>
            <Link to="/home">
              <Cards title={"Início"} description={"Volte ao início"} />
            </Link>
            <Link to="/projetos">
              <Cards
                title={"Projetos"}
                description={"Explore meus projetos     "}
              />
            </Link>
            <Link to="/contato">
              <Cards
                title={"Contato"}
                description={"Conecte-se comigo            "}
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sobre;

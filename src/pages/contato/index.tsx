import Title from "../../components/mainTitle";
import Cards from "../../components/menuCard";
import { Link } from "react-router-dom";

const Contato = () => {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center ">
        <section className="max-w-[1200px] w-[80%] flex items-center justify-between flex-row max-[768px]:flex-col">
          <div>
            <Title
              title={"Contato"}
              titleResponsive={"Contato"}
              subtitle={"Conecte-se comigo"}
            />

            <div className=""></div>
          </div>
          <div>
            <Link to="/home">
              <Cards
                title={"Início"}
                description={"Volte ao início           "}
              />
            </Link>
            <Link to="/sobremim">
              <Cards
                title={"Sobre mim"}
                description={"Leia e descubra mais sobre mim"}
              />
            </Link>
            <Link to="/projetos">
              <Cards
                title={"Projetos"}
                description={"Explore meus projetos     "}
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contato;

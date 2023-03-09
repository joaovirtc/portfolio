import { Link } from "react-router-dom";
import Title from "../../components/mainTitle";
import Cards from "../../components/menuCard";
import { RiArrowDropRightLine } from "react-icons/ri";

const Projetos = () => {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center max-[768px]:h-[140vh] ">
        <section className="max-w-[1200px] w-[80%] flex items-center justify-between flex-row max-[768px]:flex-col max-[768px]:justify-evenly ">
          <div className="p-10 max-[768px]:justify-end max-[768px]:">
            <Title
              title={"Projetos"}
              titleResponsive={"Projetos"}
              subtitle={"Explore meus projetos"}
            />
            <a href="https://github.com/joaovirtc/pyBank">
              <div className="w-72 py-5 border-b border-slate-100 flex justify-between mb-10">
                <h1 className="text-red-500 text-lg font-bold">pyBank</h1>
                <RiArrowDropRightLine size={20} color={"#fff"} />
              </div>
            </a>

            <a href="https://github.com/joaovirtc/ui-figma-jam">
              <div className="w-72 py-5 border-b border-slate-100 flex justify-between mb-10">
                <h1 className="text-purple-500 text-lg font-bold">FigJam</h1>
                <RiArrowDropRightLine size={20} color={"#fff"} />
              </div>
            </a>
            <a href="https://github.com/joaovirtc/thenorfth">
              <div className="w-72 py-5 border-b border-slate-100 flex justify-between mb-10">
                <h1 className="text-green-300 text-lg font-bold">Thenorfth</h1>
                <RiArrowDropRightLine size={20} color={"#fff"} />
              </div>
            </a>
            <div className="w-72 flex justify-center items-center">
              <a
                href="https://github.com/joaovirtc"
                className="text-blue-600 font-medium hover:underline"
              >
                Ver repositórios
              </a>
            </div>
          </div>
          <div>
            <Link to="/home">
              <Cards title={"Início"} description={"Volte ao início   "} />
            </Link>
            <Link to="/sobremim">
              <Cards
                title={"Sobre mim"}
                description={"Leia e descubra mais sobre mim"}
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

export default Projetos;

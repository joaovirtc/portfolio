import Cards from "../../components/menuCard";
import Title from "../../components/mainTitle";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="w-screen h-screen flex justify-center items-center ">
      <section className="max-w-[1200px] w-[80%] flex items-center justify-between flex-row max-[768px]:flex-col">
        <div>
          <Title
            title={"João Victor Carmindo"}
            titleResponsive={"João Victor"}
            subtitle={"Front end Developer"}
          />
        </div>
        <div>
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
          <Link to="/contato">
            <Cards
              title={"Contato"}
              description={"Conecte-se comigo            "}
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default App;

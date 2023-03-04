import Cards from "./components/menuCard";
import Title from "./components/mainTitle";

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
          <Cards
            title={"Sobre mim"}
            description={"Leia e descubra mais sobre mim"}
          />
          <Cards
            title={"Projetos"}
            description={"Explore meus projetos     "}
          />
          <Cards
            title={"Contato"}
            description={"Conecte-se comigo            "}
          />
        </div>
      </section>
    </main>
  );
}

export default App;

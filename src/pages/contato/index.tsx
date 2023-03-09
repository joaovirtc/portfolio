import Title from "../../components/mainTitle";
import Cards from "../../components/menuCard";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const Contato = () => {
  const [value, setValue] = useState("");
  const [copiado, setCopiado] = useState(false);

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

            <div>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/joaovirtc/"
                className=" cursor-pointer flex justify-start items-center w-80 h-10 p-5  bg-zinc-200 text-white rounded-lg  mt-4 transition-colors hover:bg-zinc-300"
              >
                <RiLinkedinFill color="#0066CC" size={23} />
                <h1 className="ml-10 font-normal ">Conectar com LinkedIn</h1>
              </a>
              <a
                target={"_blank"}
                href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=CllgCJlGVBCgBPBwdGCmcdnCVMsPTQsQlGbLxcgBzphndVwhJpCXdVZvdHJHPfkxfXfxfPjmDnV"
                className=" cursor-pointer flex justify-start items-center w-80 h-10 p-5  bg-zinc-200 text-white rounded-lg  mt-4 transition-colors hover:bg-zinc-300"
              >
                <RiMailSendLine color="#0066CC" size={23} />
                <h1 className="ml-[5rem] font-normal ">Enviar email</h1>
              </a>
            </div>
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

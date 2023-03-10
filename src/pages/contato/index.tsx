import Title from "../../components/mainTitle";
import Cards from "../../components/menuCard";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { RxCopy } from "react-icons/rx";
import { useCopyToClipboard } from "usehooks-ts";
import { useState } from "react";

const Contato = () => {
  const [value, copy] = useCopyToClipboard();
  const Email = `joaovictorcarmindo@gmail.com`;

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
                className=" cursor-pointer flex justify-evenly items-center w-80 h-10 py-7  bg-zinc-200 text-white rounded-lg  mt-4 transition-colors hover:bg-zinc-300"
              >
                <RiLinkedinFill color="#0066CC" size={23} />
                <div className=" w-[80%] flex items-center justify-center">
                  <h1 className=" font-normal ">Conectar com LinkedIn</h1>
                </div>
              </a>
              <div
                onClick={() => {
                  copy(Email);
                }}
                className=" cursor-text flex justify-evenly items-center w-80 h-10 py-7  bg-zinc-200 text-white rounded-lg  mt-4 transition-colors  "
              >
                <button className="p-2 bg-zinc-200 rounded-lg transition-colors hover:bg-zinc-300 ">
                  <RxCopy color="#0066CC" size={23} className="" />
                </button>
                <div className=" w-[80%] flex items-center justify-center">
                  <h1 className=" font-normal ">
                    joaovictorcarmindo@gmail.com
                  </h1>
                </div>
              </div>
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

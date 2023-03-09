import { Route, Routes, Router } from "react-router-dom";
import Home from "../pages/inicio";
import SobreMim from "../pages/sobre";
import Projetos from "../pages/projetos";
import Contato from "../pages/contato";

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<SobreMim />} path="/sobremim" />
        <Route element={<Projetos />} path="/projetos" />
        <Route element={<Contato />} path="/contato" />
      </Routes>
    </>
  );
}

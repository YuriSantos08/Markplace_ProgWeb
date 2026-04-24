import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/publico/HomePage";
import LoginPage from "./pages/publico/LoginPage";
import CadastroPage from "./pages/publico/CadastroPage";

import MinhasNoticiasPage from "./pages/autor/MinhasNoticiasPage";
import CriarNoticiaPage from "./pages/autor/CriarNoticiaPage";
import EditarNoticiaPage from "./pages/autor/EditarNoticiaPage";
import ExcluirNoticiaPage from "./pages/autor/ExcluirNoticiaPage";
import DetalheNoticiaPage from "./pages/autor/DetalheNoticiaPage";
import PerfilAutorPage from "./pages/autor/PerfilAutorPage";

import PainelEditorPage from "./pages/editor/PainelEditorPage";
import PerfilEditorPage from "./pages/editor/PerfilEditorPage";

import DashboardAdminPage from "./pages/admin/DashboardAdminPage";
import PerfilAdminPage from "./pages/admin/PerfilAdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />

        <Route path="/autor" element={<MinhasNoticiasPage />} />
        <Route path="/autor/criar" element={<CriarNoticiaPage />} />
        <Route path="/autor/editar" element={<EditarNoticiaPage />} />
        <Route path="/autor/excluir" element={<ExcluirNoticiaPage />} />
        <Route path="/autor/detalhe/:id" element={<DetalheNoticiaPage />} />
        <Route path="/autor/perfil" element={<PerfilAutorPage />} />

        <Route path="/editor" element={<PainelEditorPage />} />
        <Route path="/editor/perfil" element={<PerfilEditorPage />} />

        <Route path="/admin" element={<DashboardAdminPage />} />
        <Route path="/admin/perfil" element={<PerfilAdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import FormularioTarea from "./components/FormularioTarea";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <main>
        <h1 className="display-4 text-center">Lista de Tareas</h1>
        <FormularioTarea />
      </main>
      <Footer />
    </>
  );
}

export default App;

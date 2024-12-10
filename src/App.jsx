import FormularioTarea from "./components/FormularioTarea";
import Tarea from "./components/Tarea";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/icons/plus-circle.svg";

function App() {
  return (
    <>
      <h1 className="display-4 text-center">Lista de Tareas</h1>
      <FormularioTarea />
      <Tarea />
      <Footer />
    </>
  );
}

export default App;

import FormularioTarea from "./components/FormularioTarea";
import ListadeTareas from "./components/ListadeTareas";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <main>
        <h1 className="display-4 text-center">Lista de Tareas</h1>
        <FormularioTarea />
        <ListadeTareas />
      </main>
      <Footer />
    </>
  );
}

export default App;

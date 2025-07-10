import ListaUsuarios from "./atividade1";
import ListaPosts from "./exemploaxios";

function App(){
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-500 p-8 rounded-xl shadow-md">
              <ListaPosts />
              <ListaUsuarios />

            </div>
        </div>
    );
}
export default App
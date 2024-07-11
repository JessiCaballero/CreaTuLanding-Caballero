import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from './Navbar/Navbar'


function App() {
  return (
    <>
     <Navbar />
     <ItemListContainer greeting="saludo a todos mis clientes" />
    </>
  )
}

export default App

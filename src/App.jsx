
import './App.css'
import VerifEmail from './components/VerifEmail/VerifEmail'
import { Provider } from 'react-redux'
import store from './Store'
import Bienvenue from './components/Bienvenue/Bienvenue'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<VerifEmail />} />
        <Route path="/bienvenue" element={<Bienvenue />} />
      </Routes>
      </Provider>
      

    </div>
  )
}

export default App

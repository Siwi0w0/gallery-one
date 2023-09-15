import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import './App.css'

function App() {

  return (
    <AuthProvider value={{
      user: null,
      isLoading: false
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import './App.css'
import { AuthProvider } from "./context/auth"
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from "./routes/PrivateRoute"

function App() {

  return (
    <AuthProvider value={{
      user: null,
      isLoading: false
    }}>
      <Routes>
        <Route path="/" element={<PrivateRoute>
          <Home />
        </PrivateRoute>} />
        <Route path="/login" element={<PublicRoute>
          <Login />
        </PublicRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default App

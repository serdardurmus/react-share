// import logo from './logo.svg';
// import './App.css';
  
// import Signup from "./pages/Signup";
// import Navbar from "./components/Navbar";

import AppRouter from "./router/Router";
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
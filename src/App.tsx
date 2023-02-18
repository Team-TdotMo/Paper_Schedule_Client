import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainhome from "./pages/Mainhome";
import Signup from "./pages/AuthPage/signup";
import Login from "./pages/AuthPage/login";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

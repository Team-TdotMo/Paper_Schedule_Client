import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainhome from "./pages/Mainhome";
import Signup from "./pages/Signup";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

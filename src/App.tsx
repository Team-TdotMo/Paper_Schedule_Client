import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainhome from "./pages/Mainhome";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Mainhome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

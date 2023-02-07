import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainhome from "./pages/Mainhome";
import Signup from "./pages/AuthPage/signup";
import Login from "./pages/AuthPage/login";
import ScheduleHome from "./pages/Schedule";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="schedule" element={<ScheduleHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

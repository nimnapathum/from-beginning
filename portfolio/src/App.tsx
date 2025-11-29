import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Admin from "./pages/admin/Admin";
import { ProtectedRoute } from "@asgardeo/react-router";
import SignIn from "./pages/admin/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/admin" element={
        <ProtectedRoute
          redirectTo="/signin"
        >
          <Admin />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;




import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Layout } from "./layout/Layout";
import { Dashboard } from "./pages/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/" />

        <Route element={<Layout />} path="dashboard">
          <Route element={<Dashboard />} index />
        </Route>
      </Routes>
    </>
  );
}

export default App;

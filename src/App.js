import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateForm from "./components/createForm/createForm";
import Form from "./components/form/form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateForm />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;

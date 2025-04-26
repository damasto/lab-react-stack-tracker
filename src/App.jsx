import { useState } from "react";
import "./App.css";
import comps from "./companies.json"
import tech from "./technologies.json"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {

  const [companies, setCompanies] = useState(comps);
  const [technologies, setTechnologies] = useState(tech)


  return (
    <>
    <Routes>
      <Route path="/" element={ <HomePage companies={companies}/>}></Route>
      <Route path="/company/:companySlug" element={<CompanyPage companies={companies}/>}></Route>
      <Route path="/tech/:slug" element={ <TechnologyPage technologies={technologies}/>}></Route>
    </Routes>
    </>
  );
}

export default App;

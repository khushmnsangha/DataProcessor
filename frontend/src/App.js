import { useState } from "react";
import InputForm from "./components/InputForm";
import Dropdown from "./components/Dropdown";
import Response from "./components/Response";
import "./App.css";

function App() {
  document.title = "22BCS14585";
  const [filteredData, setFilteredData] = useState({});
  const [options, setOptions] = useState([]);

  return (
    <div className="container">
      <h1>Data Processor</h1>
      <InputForm setFilteredData={setFilteredData} />
      {filteredData.alphabets && <Dropdown setOptions={setOptions} />}
      <Response filteredData={filteredData} options={options} />
    </div>
  );
}

export default App;

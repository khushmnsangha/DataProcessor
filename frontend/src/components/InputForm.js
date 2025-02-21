import { useState } from "react";
import axios from "axios";
import "../styles/InputForm.css"; 

const InputForm = ({ setFilteredData }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.parse(input);
      const response = await axios.post("http://localhost:5000/bfhl", jsonData);
      setFilteredData(response.data);
    } catch (error) {
      alert("Invalid JSON or Server Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON (e.g. {"data":["A",1,"B"]})'
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;

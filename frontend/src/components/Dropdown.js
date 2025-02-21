import Select from "react-select";

const options = [
  { value: "alphabets", label: "Alphabets" },
  { value: "numbers", label: "Numbers" },
  { value: "highestAlphabet", label: "Highest Alphabet" },
];

const Dropdown = ({ setOptions }) => {
  return (
    <div style={{ width: "30%", marginTop: "20px" }}>
      <Select
        options={options}
        isMulti
        onChange={(selected) => setOptions(selected.map((o) => o.value))}
      />
    </div>
  );
};

export default Dropdown;

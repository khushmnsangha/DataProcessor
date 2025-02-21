const Response = ({ filteredData, options }) => {
  return (
    <div>
      {options.includes("alphabets") && (
        <p>
          <strong>Alphabets:</strong> {filteredData.alphabets?.join(", ")}
        </p>
      )}
      {options.includes("numbers") && (
        <p>
          <strong>Numbers:</strong> {filteredData.numbers?.join(", ")}
        </p>
      )}
      {options.includes("highestAlphabet") && (
        <p>
          <strong>Highest Alphabet:</strong> {filteredData.highest_alphabet}
        </p>
      )}
    </div>
  );
};

export default Response;

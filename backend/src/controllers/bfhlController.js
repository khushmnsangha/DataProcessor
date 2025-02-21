exports.handlePostRequest = (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) throw new Error("Invalid input format");

    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.status(200).json({
      is_success: true,
      user_id: "khushmn_sangha_21062004",
      email: "22bcs1485@cuchd.in",
      roll_number: "22BCS14585",
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet
    });
  } catch (error) {
    res.status(400).json({ is_success: false, error: error.message });
  }
};

exports.handleGetRequest = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};

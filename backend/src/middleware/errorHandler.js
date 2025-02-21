export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ is_success: false, message: "Server Error" });
  };
  
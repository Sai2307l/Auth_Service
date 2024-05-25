const validateUserSignup = (req, res, next) => {
  if (!req.body.email || !req.body.Password) {
    return res.status(400).json({
      success: false,
      data: {},
      Message: "Something went wrong",
      err: "Email or Password missing in the request",
    });
  }
  next();
};

module.exports = {
  validateUserSignup,
};

const registerUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const registerData = await Product.create({
      username,
      email,
    });
    res.status(200).json({
      msg: 'product create Success',
      user: registerData,
    });
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
    !user && res.status(400).json('Wrong credentials!');

    const validated = await bcrypt.compare(password, user.password);
    !validated && res.status(400).json('Wrong credentials!');

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { registerUser, loginUser };

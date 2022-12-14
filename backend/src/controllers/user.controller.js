class UserController {
  index(req, res) {
    res.send('User');
  }
}

module.exports = new UserController();

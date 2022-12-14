class PageController {
  index(req, res) {
    res.send('Page');
  }
}

module.exports = new PageController();

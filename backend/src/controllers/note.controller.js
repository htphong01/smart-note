
class NoteController {
  index(req, res) {
    res.send('Note');
  }
}

module.exports = new NoteController();
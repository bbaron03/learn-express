const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
  });
  res.send(usernames);
});

router.get('/username/:name', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {email: user.email, username: user.username};
  });
  let filtered = usernames.filter((user) => {
    return user.username.toLowerCase().includes(req.params.name.toLowerCase());
  });
  res.send(filtered);
});

module.exports = router
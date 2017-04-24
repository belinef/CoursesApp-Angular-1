const usersDB = require('../usersDB');

class BaseMethods {
    checkLogin(req, res) {
     const {password , user} = req.body;
      if (!usersDB[user]) {
        res.send({
          login: false,
          error : 'Wrong Login'
        });

        return;
      }
      if (usersDB[user].password !== password) {
        res.send({
          login: false,
          error : 'Wrong Password'
        });
      } else {
        res.send({
          login: true
        });
      }
    }
}

module.exports = BaseMethods;

var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'glamazon_prime'
});

module.exports.read = callback => {

  var sql = 'select * from customers';

  return new Promise((resolve, reject) => {
    db.query(sql, (err, data) => {
      if (err) {
        console.log(err);
        console.log('failed to query to database');
        reject(err);
      } else {
        console.log('successfully queried database');
        resolve(data);
      }
    })
  })
}

module.exports.create = (tableName, callback) => {

  var sql = 'select * from customers';
  
  return new Promise((resolve, reject) => {
    db.query(sql, (err, data) => {
      if (err) {
        console.log(err);
        console.log('failed to query to database');
        reject(err);
      } else {
        console.log('successfully queried database');
        resolve(data);
      }
    })
  })
}

/*

COPY-PASTA CONSIDER REFORMATING

function getUserDataAsync(userId) {
    return new Promise(function(resolve, reject) {
        // Put all your code here, this section is throw-safe.
        getUserData(userId, resolve, reject);
    });
}

*/
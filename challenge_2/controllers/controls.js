const fs = require('fs');

var cvsStringify = collection => {
  var keys = ['firstName', 'lastName', 'county', 'city', 'role', 'sales'];
  var results = [];

  keys.map(key => {
    results
  })


}



// fix later
module.exports.read = (request, response) => {
  // console.log('serving a GET request');
  // fs.readFile('./samples/csv_report.csv', (err, fileData) => {
  //   if (err) {
  //     response.status(400); //
  //     response.end();
  //   } else {
  //     var data = fileData;
  //     response.status(200);
  //     response.send(data);
  //   }
  // })
}

module.exports.create = (request, response) => {
  var data = request.body;
  console.log('serving a POST request');
  var defaultString = 'firstName,lastName,county,city,role,sales';
  var cvsString = cvsStringify(data);
  // write that data to file
  // send that file, and the string so that form can be filled on the other side
  response.status(201).send(`<body><div>${arrayText}</div<p>you did it</p></body>`);
}

var arrayText = [
  'dogs',
  'cats',
  'otherthings'
]
var text = "firstName,lastName,county,city,role,sales\
Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000\
Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000\
Smitty,Won,San Mateo,Redwood City,Sales Person,4800000\
Allen,Price,San Mateo,Burlingame,Sales Person,2500000\
Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000";
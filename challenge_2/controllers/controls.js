const fs = require('fs');

const {parse} = require('querystring')

var csvStringify = collection => {
  var keys = ['firstName', 'lastName', 'county', 'city', 'role', 'sales'];
  var headerString = 'firstName,lastName,county,city,role,sales\n';
  function recurse(person) {
    let results = '';
    for (let key of keys) {
      results += person[key] + ',';
    }
    results += '\n';
    if (person.children.length) {
      for (let child of person.children) {
        results += recurse(child);
      }
    }
    return results;
  }

  return headerString += recurse(collection);
}

module.exports.read = (request, response) => {
  console.log('serving a GET request');
  fs.readFile('./samples/csv_report.csv', (err, fileData) => {
    if (err) {
      // edit
      response.status(400).end();
    } else {
      var data = fileData;
      response.status(200).send(data);
    }
  })
}

module.exports.create = (request, response) => {
  let buffer = '';
  request.on('data', chunk => {
    buffer += chunk.toString();
  });
  request.on('end', ()=> {
    data = parse(buffer)['form-data'];
    console.log(csvStringify(JSON.parse(data)));

    response.status(200);//.send(csvStringify(JSON.parse(parse(buffer))));
  })
  //var csvString = cvsStringify(data);
  // write that data to file
  // send that file, and the string so that form can be filled on the other side
  // response.status(201).send(`<body><div>${arrayText}</div<p>you did it</p></body>`);
}

var text = "firstName,lastName,county,city,role,sales\
Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000\
Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000\
Smitty,Won,San Mateo,Redwood City,Sales Person,4800000\
Allen,Price,San Mateo,Burlingame,Sales Person,2500000\
Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000";
var builder = require('xmlbuilder');

const generate = async (request, response) => {
 var eName = request.body.name
 var eIp = request.body.address
  var xml = builder.create('EDGEVIEW')
  .ele('EDGEMARC')
    .ele('NAME', eName).up()
    .ele('ADDRESS', eIp).up()
  .end({ pretty: true});
 
console.log(xml);
var result = {};
result.xml = xml;
response.set({'content-type': 'application/json'});
response.send(JSON.stringify(result));
}


module.exports = {
  generate
}

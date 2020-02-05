var builder = require('xmlbuilder');

const generate = async (request, response) => {
 var eName = request.body.name
 var lines = eName.split('\n');
for(var i = 0;i < lines.length;i++){
   console.log(lines[i])
}
 var eIp = request.body.address
  var xml = builder.create('EDGEVIEW')
  .ele('EDGEMARC')
    .ele('NAME', eName).up()
    .ele('ADDRESS', eIp).up()
  .end({ pretty: true});
 
console.log(xml);
var result = {};
result.list = xml;
response.set({'content-type': 'application/json'});
response.send(JSON.stringify(result));
}


module.exports = {
  generate
}

var builder = require('xmlbuilder');

const generate = async (request, response) => {
 var eName = request.body.name
 var eIp = request.body.address
  var xml = builder.create('EDGEVIEW')
   var lines = eName.split('\n');
   var lines2 = eIp.split('\n');
for(var i = 0;i < lines.length;i++){
   //console.log(lines[i])
    xml.ele('EDGEMARC')
    xml.ele('NAME', lines[i]).up()
    xml.ele('ADDRESS', lines2[i]).up()
    
}
 xml.end({ pretty: true});
console.log(xml);
var result = {};
result.list = xml;
response.set({'content-type': 'application/json'});
response.send(JSON.stringify(result));
}


module.exports = {
  generate
}

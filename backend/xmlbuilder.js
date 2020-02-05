var builder = require('xmlbuilder');

const generate = async (request, response) => {
 var eName = request.body.name
 var eIp = request.body.address
    var lines = eName.split('\n');
   var lines2 = eIp.split('\n');
  var root = builder.create('EDGEVIEW')
for(var i = 0;i < lines.length;i++){
   //console.log(lines[i])
    var item = root.ele('EDGEMARC');
    item.ele('NAME', lines[i]).up()
    item.ele('ADDRESS', lines2[i]).up()
    
}
 var xml = root.end({ pretty: true});
console.log(xml);
var result = {};
result.list = xml;
response.set({'content-type': 'application/json'});
response.send(JSON.stringify(result));
}


module.exports = {
  generate
}

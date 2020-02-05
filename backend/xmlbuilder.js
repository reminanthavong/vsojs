var builder = require('xmlbuilder');

const generate = async (request, response) => {
 var eName = request.body.name.split('\n')
 var eIp = request.body.address.split('\n')
 //var lines = eName.split('\n');
 //var lines2 = eIp.split('\n');
 var root = builder.create('EDGEVIEW')
 for (var i = 0; i < eName.length; i++) {
  //console.log(lines[i])
  var item = root.ele('EDGEMARC');
  item.ele('NAME', eName[i]).up()
  item.ele('ADDRESS', eIp[i]).up()

 }
 var xml = root.end({
  pretty: true
 });
 //console.log(xml);
 var result = {};
 result.list = xml;
 response.set({
  'content-type': 'application/json'
 });
 response.send(JSON.stringify(result));
}


module.exports = {
 generate
}

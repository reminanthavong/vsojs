var builder = require('xmlbuilder');
var log4js = require('log4js');
 
const generate = async (request, response) => {
 var eName = request.body.name
 var eIp = request.body.address
  var xml = builder.create('EDGEVIEW')
  .ele('EDGEMARC')
    .ele('NAME', eName)
    .ele('ADDRESS', eIp)
  .end({ pretty: true});
 
console.log(xml);
//response.send(JSON.stringify(xml));
 response.redirect(
        "/createxml?success=" + encodeURIComponent(xml)
      );
};


module.exports = {
  generate
};

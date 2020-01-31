var builder = require('xmlbuilder');
 
var xml = builder.create('EDGEVIEW')
  .ele('EDGEMARC')
    .ele('NAME', 'git://github.com/oozcitak/xmlbuilder-js.git')
    .ele('ADDRESS', 'git://github.com/oozcitak/xmlbuilder-js.git')
  .end({ pretty: true});
 
console.log(xml);

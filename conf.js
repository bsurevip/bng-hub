/*jslint node: true */
"use strict";

//exports.port = 6611;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';


exports.storage = 'sqlite';


exports.initial_witnesses = [
	'5K7CSLTRPC5LFLOS3D34GBHG7RFD4TPO',
	'BTCI3SJOBSRA6TFF6GHI3SO4WDC3G2LY',
	'CCNMWLURGSS5NS4YFLOPGAVXKMQXTXZR',
	'EQYZCJQAJ4KHFTJ4BKUJFBWATCU5UO5A',
	'FZ2S2HU42RECG46BEJYV44DIQYGFFNI2',
	'IXFO5VS57ZMTBUTBZVG66ZF3K4WFLPJJ',
	'NZOBDXWJIL2JVXZGY3OBP5MMMZMR2YUD',
	'VEZA54TWIXIHZLHFHCEEBU3XFC7NKVKX',
	'WJWKAJ2H5REGDSCCQMFGCENCODK6MN3X',
	'ZAMTST6CVMQERNXQY3ZWIC5L2OMWWWTP',
	'ZUWW66QUJR57BZSVA3NLM5FRHAFSX6B7',
	'ZVT76QDYAXIIVYMWJWFMJPGYBZRY7JW7'
];

exports.initial_peers = [
	'wss://byteball.org/bb'
];

console.log('finished hub conf');
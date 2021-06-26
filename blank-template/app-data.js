const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];


// Month images - appear under month name if key is defined here
// '0' is for the page after the last month which is an index of the img URLs.
// '1' is January, '2' is February, etc.
//
// '6.jpg' : [  'https://www...',  'Name',   ';background-position: center'  ],
//    ^                ^             ^                     ^
// Month.ext       URL to img        Caption      style attribute of background image (prepend with ; )
//   key           val el[0]         val el[1]             val el[2]
// required       '' if none       '' if none             '' if none
const monimgs = {

	// '0.jpg'	: ['','', ''],
	// '1.jpg'	: ['','', ''],
	// '2.jpg'	: ['','', ''],
	// '3.jpg'	: ['','', ''],
	// '4.jpg'	: ['','', ''],
	// '5.jpg'	: ['','', ''],
	// '6.jpg'	: ['','', ''],
	// '7.jpg'	: ['','', ''],
	// '8.jpg'	: ['','', ''],
	// '9.jpg'	: ['','', ''],
	// '10.jpg': ['','', ''],
	// '11.jpg': ['','', ''],
	// '12.jpg': ['','', ''],


	'':''
};

// Month/day images
// '1-31.jpg' : [  'https://www...',  'Name',   ';background-position: center'  ],
//   ^                ^                 ^                     ^
// Month-day.ext   URL to img        Caption      style attribute of background image (prepend with ; )
//   key           val el[0]         val el[1]             val el[2]
// required      '' if none       '' if none             '' if none
const imgs = {

	// '1-1.jpg'	: ['','', ''],
	// '3-15.jpg'	: ['','', ''],
	// '11-22.jpg': ['','', ''],

	'':''
};

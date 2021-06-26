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
	'0.jpg'	: ['https://www.flickr.com/photos/dendroica/35426457086/'														,'Mallard ducklings'			],
	'1.jpg'	: ['https://www.flickr.com/photos/dendroica/4509765992/in/album-72157625673250740/'	,'Bloodroot'							],
	'2.jpg'	: ['https://www.flickr.com/photos/dendroica/4355181326/in/album-72157625673250740/'	,'Trees along the river'	],
	'3.jpg'	: ['https://www.flickr.com/photos/dendroica/4446957836/in/album-72157625673250740/'	,'Pier'										],
	'4.jpg'	: ['https://www.flickr.com/photos/dendroica/38884916345/'														,'Frozen puddle'					],
	'5.jpg'	: ['https://www.flickr.com/photos/dendroica/34892357186/'														,'Pole Farm grassland'		],
	'6.jpg'	: ['https://www.flickr.com/photos/dendroica/29060501737/in/album-72157663772329860/','Falls on Pyramid Creek'	],
	'7.jpg'	: ['https://www.flickr.com/photos/dendroica/29826467938/'														,'Boardwalk trail'				],
	'8.jpg'	: ['https://www.flickr.com/photos/dendroica/43935663812/'														,'Canal at DeMott Lane'		],
	'9.jpg'	: ['https://www.flickr.com/photos/dendroica/44438560111/'														,'Boardwalk trail'				],
	'10.jpg': ['https://www.flickr.com/photos/dendroica/31736800608/'														,'Ravine and Blue Trail'	],
	'11.jpg': ['https://www.flickr.com/photos/dendroica/44956618974/'														,'Dawn at Donaldson Park'	],
	'12.jpg': ['https://www.flickr.com/photos/dendroica/37933808165/'														,'Mill Pond'							]
};

const imgs = {
	// Month/day images
	// '1-31.jpg' : [  'https://www...',  'Name',   ';background-position: center'  ],
	//   ^                ^             ^                     ^
	// Month-day.ext   URL to img        Caption      style attribute of background image (prepend with ; )
	//   key           val el[0]         val el[1]             val el[2]
	// required      '' if none       '' if none             '' if none

	'1-31.jpg'	: ['https://www.flickr.com/photos/dendroica/5405798133/in/album-72157628644237999/'		,'Red Crossbill'																												, ';background-position: right'],

	'4-19.jpg'	:	['https://www.flickr.com/photos/dendroica/5635697797/in/album-72157628644237999/'		,'Snowy Egret'																													, ''],
	'7-14.jpg'	:	['https://www.flickr.com/photos/dendroica/7578123026/in/album-72157632354304419/'		,'<span style="font-size:10px;">Yellow-crowned Night-Heron</span>'			,';background-position: right'],
	'11-8.jpg'	:	['https://www.flickr.com/photos/dendroica/8167034755/in/album-72157632354304419/'		,'<span style="font-size:11px;">White-throated Sparrow</span>'					,';background-position: center'],
	'8-2.jpg'		:	['https://www.flickr.com/photos/dendroica/6003620322/in/album-72157628644237999/'		,'<span style="font-size:13px;">Gray-hooded Gull</span>'								,';background-position: right'],

	'9-28.jpg'	:	['https://www.flickr.com/photos/dendroica/8034408973/in/album-72157632354304419/'		,'American Redstart'																										, ';background-position: center'],
	'9-25.jpg'	:	['https://www.flickr.com/photos/dendroica/9933504835/in/album-72157639244408553/'		,'Merlin'																																, ';background-position: center'],
	'11-29.jpg'	:	['https://www.flickr.com/photos/dendroica/11127180023/in/album-72157639244408553/'	,'Turkey Vulture'																												, ';background-position: center'],
	'12-18.jpg'	:	['https://www.flickr.com/photos/dendroica/11443048194/in/album-72157639244408553/'	,'Fish Crow'																														, ';background-position: center'],
	'2-22.jpg'	:	['https://www.flickr.com/photos/dendroica/12704498875/in/album-72157649628660207/'	,'Tufted Titmouse'																											, ';background-position: center'],
	'5-19.jpg'	:	['https://www.flickr.com/photos/dendroica/14036081918/in/album-72157649628660207/'	,'Wilson\'s Warbler'																										, ';background-position: center'],

	'9-7.jpg'		:	['https://www.flickr.com/photos/dendroica/15173781415/in/album-72157649628660207/'	,'<span style="font-size:14px;">American Black Duck</span>'							, ';background-position: center'],
	'1-10.jpg'	:	['https://www.flickr.com/photos/dendroica/16111633587/in/album-72157660651028224/'	,'<span style="font-size:14px;">Red-throated Loon</span>'								, ';background-position: center'],
	'2-21.jpg'	:	['https://www.flickr.com/photos/dendroica/16419227468/in/album-72157660651028224/'	,'<span style="font-size:14px;">Rough-legged Hawk</span>'								, ';background-position: center'],
	'4-11.jpg'	:	['https://www.flickr.com/photos/dendroica/16928211190/in/album-72157660651028224/'	,'Eastern Phoebe'																												, ';background-position: top'],
	'11-7.jpg'	:	['https://www.flickr.com/photos/dendroica/22443700898/in/album-72157660651028224/'	,'Herring Gull'																													, ';background-position: center'],
	'3-19.jpg'	:	['https://www.flickr.com/photos/dendroica/16682049630/in/album-72157660651028224/'	,'Dark-eyed Junco'																											, ';background-position: center;background-size:114px;'],
	'10-6.jpg'	:	['https://www.flickr.com/photos/dendroica/22009276681/in/album-72157660651028224/'	,'Lark Sparrow'																													, ';background-position: center'],
	'12-9.jpg'	:	['https://www.flickr.com/photos/dendroica/23018347023/in/album-72157660651028224/'	,'Painted Bunting'																											, ';background-position: center'],

	'1-2.jpg'		:	['https://www.flickr.com/photos/dendroica/24881361475/in/album-72157678435075096/'	,'American Coot'																												, ';background-position: center'],
	'4-16.jpg'	:	['https://www.flickr.com/photos/dendroica/26443744186/in/album-72157678435075096/'	,'Great Egret'																													, ';background-position: center'],
	'5-18.jpg'	:	['https://www.flickr.com/photos/dendroica/27101314795/in/album-72157678435075096/'	,'Tree Swallow'																													, ';background-position: center'],
	'2-4.jpg'		:	['https://www.flickr.com/photos/dendroica/32334486940/in/album-72157667983558839/'	,'<span style="font-size:11px;">White-breasted Nuthatch</span>'					, ';background-position: center'],
	'5-4.jpg'		:	['https://www.flickr.com/photos/dendroica/33643847493/in/album-72157667983558839/'	,'Black Vulture'																												, ';background-position: center'],
	'7-29.jpg'	:	['https://www.flickr.com/photos/dendroica/35416314394/in/album-72157667983558839/'	,'Tree Swallow'																													, ';background-position: center'],

	'8-12.jpg'	:	['https://www.flickr.com/photos/dendroica/36483693696/in/album-72157667983558839/'	,'Barred Owl'																														, ';background-position: center'],
	'12-16.jpg'	:	['https://www.flickr.com/photos/dendroica/27317241099/'													 		,'Myrtle Warbler'																												, ';background-position: center;background-size:168px;'],
	'11-24.jpg'	:	['https://www.flickr.com/photos/dendroica/38567596016/in/album-72157667983558839/'	,'Snow Bunting'																													, ';background-position: center'],
	'1-29.jpg'	:	['https://www.flickr.com/photos/dendroica/31784621253/in/album-72157667983558839/'	,'Winter Wren'																													, ';background-position: center'],
	'1-1.jpg'		:	['https://www.flickr.com/photos/dendroica/24569811717/in/album-72157690851928251/'	,'Blue Jay'																															, ';background-position: center'],
	'1-11.jpg'	:	['https://www.flickr.com/photos/dendroica/39635767071/in/album-72157690851928251/'	,'Gadwall'																															, ';background-position: center;background-size:230px;'],

	'1-19.jpg'	:	['https://www.flickr.com/photos/dendroica/24913859617/in/album-72157690851928251/'	,'<span style="font-size:11px;">Red-bellied Woodpecker</span>'					, ';background-position: center'],
	'1-20.jpg'	:	['https://www.flickr.com/photos/dendroica/39805932901/in/album-72157690851928251/'	,'Mute Swans'																														, ';background-position: right'],
	'10-25.jpg'	:	['https://www.flickr.com/photos/dendroica/45505440752/'															,'Cedar Waxwing'																												, ';background-position: center'],
	'10-13.jpg'	:	['https://www.flickr.com/photos/dendroica/44581437234/'															,'Purple Finch'																													, ';background-position: center'],
	'10-2.jpg'	:	['https://www.flickr.com/photos/dendroica/45075142591/'															,'Merlin'																																, ';background-position: center'],
	'9-8.jpg'		:	['https://www.flickr.com/photos/dendroica/44514430082/'															,'<span style="font-size:14px;">Greater Yellowlegs</span>'							, ';background-position: center'],
	'8-16.jpg'	:	['https://www.flickr.com/photos/dendroica/29165343287/'															,'Great Blue Heron'																											, ';background-position: center'],
	'10-9.jpg'	:	['https://www.flickr.com/photos/dendroica/29010105227/'															,'<span style="font-size:13px;">Red-winged Blackbird</span>'						, ';background-position: center'],
	'7-21.jpg'	:	['https://www.flickr.com/photos/dendroica/28664990507/'															,'House Wren'																														, ';background-position: center'],

	'7-19.jpg'	:	['https://www.flickr.com/photos/dendroica/41702796680/'															,'Common Grackle'																												, ';background-position: center'],
	'7-7.jpg'		:	['https://www.flickr.com/photos/dendroica/42547323754/'															,'House Finch'																													, ';background-position: center'],
	'6-29.jpg'	:	['https://www.flickr.com/photos/dendroica/42441786804/'															,'Mallard'																															, ';background-position: center'],
	'6-19.jpg'	:	['https://www.flickr.com/photos/dendroica/29028587118/'															,'Baltimore Oriole '																										, ';background-position: center'],
	'6-16.jpg'	:	['https://www.flickr.com/photos/dendroica/41938094985/'															,'Eastern Bluebird'																											, ';background-position: center'],
	'5-30.jpg'	:	['https://www.flickr.com/photos/dendroica/42464039441/'															,'Common Grackle'																												, ';background-position: center'],
	'5-15.jpg'	:	['https://www.flickr.com/photos/dendroica/41419466444/'															,'<span style="font-size:13px;">Common Yellowthroat</span>'							, ';background-position: center'],
			'5-5.jpg'		:	['https://www.flickr.com/photos/dendroica/41932844921/'													,'Great Egret'																													, ';background-position: center'],
	'4-28.jpg'	:	['https://www.flickr.com/photos/dendroica/26899077737/'															,'Great Egret'																													, ';background-position: center'],

	'4-24.jpg'	:	['https://www.flickr.com/photos/dendroica/27824438618/'															,'Brant'																																, ';background-position: center;background-size:270px;'],
	'4-12.jpg'	:	['https://www.flickr.com/photos/dendroica/26544902227/'															,'Wild Turkey'																													, ';background-position: top;background-size:100px;'],
	'4-9.jpg'		:	['https://www.flickr.com/photos/dendroica/41343332331/'															,'American Robin'																												, ';background-position: center'],
	'4-1.jpg'		:	['https://www.flickr.com/photos/dendroica/40453973414/'															,'Bald Eagle'																														, ';background-position: center'],
	'4-5.jpg'		:	['https://www.flickr.com/photos/dendroica/41214753432/'															,'Cooper\'s Hawk'																												, ';background-position: top'],
	'3-31.jpg'	:	['https://www.flickr.com/photos/dendroica/41100089252/'															,'<span style="font-size:12px;">Golden-crowned Kinglet</span>'					, ';background-position: center'],

	'3-30.jpg'	:	['https://www.flickr.com/photos/dendroica/39314531410/'															,'Red-tailed Hawk'																											, ';background-position: center'],
	'3-11.jpg'	:	['https://www.flickr.com/photos/dendroica/26886918698/'															,'<span style="font-size:14px;">Hairy Woodpecker</span>'								, ';background-position: center'],
	'3-3.jpg'		:	['https://www.flickr.com/photos/dendroica/39887892764/'															,'House Finch'																													, ';background-position: top'],
	'2-24.jpg'	:	['https://www.flickr.com/photos/dendroica/40462982291/'															,'<span style="font-size:11px;">Red-bellied Woodpecker</span>'					, ';background-position: center'],
	'2-17.jpg'	:	['https://www.flickr.com/photos/dendroica/38516109240/'															,'<span style="font-size:13px;">Northern Mockingbird</span>'						, ';background-position: center'],
	'2-13.jpg'	:	['https://www.flickr.com/photos/dendroica/26399733678/'															,'Northern Cardinal'																										, ';background-position: center'],
	'2-1.jpg'		:	['https://www.flickr.com/photos/dendroica/39320556014/'															,'Canada Goose'																													, ';background-position: center'],
	'12-2.jpg'	:	['https://www.flickr.com/photos/dendroica/37908236035/'															,'<span style="font-size:14px;">Green-winged Teal</span>'								, ';background-position: center;background-size:210px;'],

	'11-1.jpg'	:	['https://www.flickr.com/photos/dendroica/44959077524/'															,'Red-tailed Hawk'																											, ';background-position: center'],
	'6-26.jpg'	:	['https://www.flickr.com/photos/dendroica/43196142412/'															,'Common Raven'																													, ';background-position: center;background-size:117px;'],
	'6-9.jpg'		:	['https://www.flickr.com/photos/dendroica/40887675770/in/album-72157628962745057/'	,'<span style="font-size:10px;">Double-crested Cormorant</span>'				, ';background-position: center'],
	'8-6.jpg'		:	['https://www.flickr.com/photos/dendroica/4877010478/'															,'<span style="font-size:12px;">Banded Sandpiper</span>'								, ';background-position: center'],
	'8-27.jpg'	:	['https://www.flickr.com/photos/dendroica/36457364160/'															,'Mourning Dove'																												, ';background-position: right'],
	'10-26.jpg'	:	['https://www.flickr.com/photos/dendroica/24099813148/'															,'Bald Eagle'																														, ';background-position: center;background-size:238px;'],

	'':''
};

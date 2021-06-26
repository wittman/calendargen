const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];


// Month images - appear under month name if key is defined here
// '0' is for the page after the last month which is an index of the img URLs.
// '1' is January, '2' is February, etc.
//
// '6.jpg' : [  'https://www...',  'Name',   ';background-position: top'  ],
//    ^                ^             ^                     ^
// Month.ext       URL to img        Caption      style attribute of background image (prepend with ; )
//   key           val el[0]         val el[1]             val el[2]
// required       '' if none       '' if none             '' if none
const monimgs = {

 '0.jpg' : ['https://en.wikipedia.org/wiki/File:Deathvalleysky_nps_big.jpg'                     ,'Milky Way'               , ''],
 '1.jpg' : ['https://en.wikipedia.org/wiki/File:Hs-2009-25-e-full.jpg'                          ,'Carina Nebula'           , ''],
 '2.jpg' : ['https://en.wikipedia.org/wiki/File:Nursery_of_New_Stars_-_GPN-2000-000972.jpg'     ,'Triangulum Galaxy'       , ''],
 '3.jpg' : ['https://en.wikipedia.org/wiki/File:Omega_Nebula.jpg'                               ,'Omega Nebula'            , ''],
 '4.jpg' : ['https://en.wikipedia.org/wiki/File:Horsehead-Hubble.jpg'                           ,'Horsehead Nubula'        , ''],
 '5.jpg' : ['https://en.wikipedia.org/wiki/File:NGC6543.jpg'                                    ,'Cat\'s Eye Nebula'       , ''],
 '6.jpg' : ['https://en.wikipedia.org/wiki/File:Tycho_xrayonly.jpg'                             ,'Tycho Supernova remnant' , ''],
 '7.jpg' : ['https://en.wikipedia.org/wiki/File:PIA04533.jpg'                                   ,'Red Rectangle Nebula'    , ''],
 '8.jpg' : ['https://en.wikipedia.org/wiki/File:SNR_0509.jpg'                                   ,'SNR B0509-67.5'          , ''],
 '9.jpg' : ['https://en.wikipedia.org/wiki/File:Antennae_galaxies_xl.jpg'                       ,'Antennae galaxies'       , ''],
 '10.jpg': ['https://en.wikipedia.org/wiki/File:The_Oyster_Nebula.jpg'                          ,'Oyster Nebula'           , ''],
 '11.jpg': ['https://en.wikipedia.org/wiki/File:Crab_Nebula.jpg'                                ,'Crab Nebula'             , ''],
 '12.jpg': ['https://en.wikipedia.org/wiki/File:Hubble2005-01-barred-spiral-galaxy-NGC1300.jpg' ,'Barred spiral galaxy'    , ''],


 '':''
};

// Month/day images
// '1-31.jpg' : [  'https://www...',  'Name',   ';background-position: center'  ],
//   ^                ^                 ^                     ^
// Month-day.ext   URL to img        Caption      style attribute of background image (prepend with ; )
//   key           val el[0]         val el[1]             val el[2]
// required      '' if none       '' if none             '' if none
const imgs = {

 '8-19.png' : ['https://en.wikipedia.org/wiki/Korabl-Sputnik_2#/media/File:USSR_stamp_1_ruble_Belka-Strelka.PNG'           ,'Sputnik 5 (1960)' , ''],
 '3-11.jpg' : ['https://en.wikipedia.org/wiki/Pioneer_5#/media/File:Pioneer-5.jpg'                                         ,'Pioneer 5 (1960)' , ''],
 '4-12.jpg' : ['https://en.wikipedia.org/wiki/File:Vostokpanel.JPG'                                                        ,'Vostok 1 (1961)'  , ''],
 '5-5.jpg'  : ['https://en.wikipedia.org/wiki/File:Mercury-Redstone_3_Launch_MSFC-6100884.jpg'                             ,'Freedom 7 (1961)' , ''],
 '11-28.jpg': ['https://en.wikipedia.org/wiki/File:M04_1112.jpg'                                                           ,'Mariner 4 (1964)' , ''],
 '1-14.jpg' : ['https://en.wikipedia.org/wiki/File:Soyuz45-1.jpg'                                                          ,'Soyuz 4 (1969)'   , ''],
 '2-3.jpg'  : ['https://en.wikipedia.org/wiki/File:Luna_9_Musee_du_Bourget_P1010505.JPG'                                   ,'Luna 9 (1966)'    , ';background-size:105px;background-position:bottom'],
 '6-16.jpg' : ['https://en.wikipedia.org/wiki/File:Vostok_6_capsule_on_display,_2016.jpg'                                  ,'Vostok 6 (1963)'  , ';background-size:178px'],
 '7-20.jpg' : ['https://en.wikipedia.org/wiki/File:Aldrin_Apollo_11_original.jpg'                                          ,'Apollo 11 (1969)' , ';background-position:top'],
 '9-24.jpg' : ['https://en.wikipedia.org/wiki/File:Luna_16.jpg'                                                            ,'Luna 16 (1970)'   , ''],
 '10-20.png': ['https://en.wikipedia.org/wiki/Venera_9#/media/File:Foto_de_Venera_9.png'                                   ,'Venera 9 (1975)'  , ';background-size:474px;'],
 '12-7.jpg' : ['https://en.wikipedia.org/wiki/Galileo_(spacecraft)#/media/File:Galileo_Preparations_-_GPN-2000-000672.jpg' ,'Galileo (1995)'   , ''],

 '':''
};

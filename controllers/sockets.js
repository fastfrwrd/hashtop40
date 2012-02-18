module.exports = function(socket) {

  socket.sockets.on('connection', function(sock) {
    
    var tracks = { 
      tracks: [
        {
            "name": "Creep",
            "duration": "237",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Radiohead/_/Creep",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Radiohead",
                "mbid": "a74b1b7f-71a5-4011-9441-d0b5e4122711",
                "url": "http://www.last.fm/music/Radiohead"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/49158523.png",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/49158523.png",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/49158523.png",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/49158523.png",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "1"
            }
        },
        {
            "name": "One Week",
            "duration": "170",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Barenaked+Ladies/_/One+Week",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Barenaked Ladies",
                "mbid": "86e736b4-93e2-40ff-9e1c-fb7c63fef5f6",
                "url": "http://www.last.fm/music/Barenaked+Ladies"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/60323617.jpg",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/60323617.jpg",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/60323617.jpg",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/60323617.jpg",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "2"
            }
        },
        {
            "name": "Basket Case",
            "duration": "182",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Green+Day/_/Basket+Case",
            "streamable": {
                "#text": "0",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Green Day",
                "mbid": "084308bd-1654-436f-ba03-df6697104e19",
                "url": "http://www.last.fm/music/Green+Day"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/58617065.png",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/58617065.png",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/58617065.png",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/58617065.png",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "3"
            }
        },
        {
            "name": "I Try",
            "duration": "234",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Macy+Gray/_/I+Try",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Macy Gray",
                "mbid": "48772747-4cda-4ba8-b470-cfd5a32e05f7",
                "url": "http://www.last.fm/music/Macy+Gray"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/51670415.png",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/51670415.png",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/51670415.png",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/51670415.png",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "4"
            }
        },
        {
            "name": "Amazed",
            "duration": "239",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Lonestar/_/Amazed",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Lonestar",
                "mbid": "407592bd-6b6e-4803-80fd-f17e59446734",
                "url": "http://www.last.fm/music/Lonestar"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/59116633.jpg",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/59116633.jpg",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/59116633.jpg",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/59116633.jpg",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "5"
            }
        },
        {
            "name": "Cherry Pie",
            "duration": "199",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Warrant/_/Cherry+Pie",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Warrant",
                "mbid": "9aa0d535-3efe-468c-afda-43bd17d44641",
                "url": "http://www.last.fm/music/Warrant"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/59145107.jpg",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/59145107.jpg",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/59145107.jpg",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/59145107.jpg",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "6"
            }
        },
        {
            "name": "Far Behind",
            "duration": "310",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Candlebox/_/Far+Behind",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Candlebox",
                "mbid": "8e9516ba-f417-47dd-a8a5-8998b94553f8",
                "url": "http://www.last.fm/music/Candlebox"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/69974698.png",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/69974698.png",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/69974698.png",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/69974698.png",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "7"
            }
        },
        {
            "name": "Gettin' Jiggy Wit It",
            "duration": "222",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Will+Smith/_/Gettin%27+Jiggy+Wit+It",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Will Smith",
                "mbid": "5bae7081-64ef-4473-825a-38d310deb14c",
                "url": "http://www.last.fm/music/Will+Smith"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/56884827.jpg",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/56884827.jpg",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/56884827.jpg",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/56884827.jpg",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "8"
            }
        },
        {
            "name": "What's Up?",
            "duration": "251",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/4+Non+Blondes/_/What%27s+Up%3F",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "4 Non Blondes",
                "mbid": "efef848b-63e4-4323-8ef7-69a48fbdd51d",
                "url": "http://www.last.fm/music/4+Non+Blondes"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/57408299.png",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/57408299.png",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/57408299.png",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/57408299.png",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "9"
            }
        },
        {
            "name": "Sumthin' Sumthin'",
            "duration": "256",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/Maxwell/_/Sumthin%27+Sumthin%27",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "Maxwell",
                "mbid": "d252cca8-8214-43e5-b81a-101eb4a1447e",
                "url": "http://www.last.fm/music/Maxwell"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/73592928.png",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/73592928.png",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/73592928.png",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/73592928.png",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "10"
            }
        },
        {
            "name": "Globe Trotter",
            "duration": "310",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/LEMS/_/Globe+Trotter",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "LEMS",
                "mbid": "2c72f815-d474-4d41-ad12-8217b38d77a1",
                "url": "http://www.last.fm/music/LEMS"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/10301377.jpg",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/10301377.jpg",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/10301377.jpg",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/10301377.jpg",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "11"
            }
        },
        {
            "name": "Our Love Song  Icky Boyfriends",
            "duration": "119",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/OCS/_/Our+Love+Song++Icky+Boyfriends",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "OCS",
                "mbid": "9fe32568-febf-4587-a6c5-5fa7f28e3233",
                "url": "http://www.last.fm/music/OCS"
            },
            "image": [
                {
                    "#text": "http://images.amazon.com/images/P/B000228ERW.01._SCMZZZZZZZ_.jpg",
                    "size": "small"
                },
                {
                    "#text": "http://images.amazon.com/images/P/B000228ERW.01._SCMZZZZZZZ_.jpg",
                    "size": "medium"
                },
                {
                    "#text": "http://images.amazon.com/images/P/B000228ERW.01._SCMZZZZZZZ_.jpg",
                    "size": "large"
                },
                {
                    "#text": "http://images.amazon.com/images/P/B000228ERW.01._SCMZZZZZZZ_.jpg",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "12"
            }
        },
        {
            "name": "Rich Girl",
            "duration": "167",
            "playcount": "1",
            "mbid": "",
            "url": "http://www.last.fm/music/The+Bird+and+The+Bee/_/Rich+Girl",
            "streamable": {
                "#text": "1",
                "fulltrack": "0"
            },
            "artist": {
                "name": "The Bird and The Bee",
                "mbid": "d08b66b4-8950-439f-bd8e-2dd78dbd7a5f",
                "url": "http://www.last.fm/music/The+Bird+and+The+Bee"
            },
            "image": [
                {
                    "#text": "http://userserve-ak.last.fm/serve/34s/55322265.png",
                    "size": "small"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/64s/55322265.png",
                    "size": "medium"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/126/55322265.png",
                    "size": "large"
                },
                {
                    "#text": "http://userserve-ak.last.fm/serve/300x300/55322265.png",
                    "size": "extralarge"
                }
            ],
            "@attr": {
                "rank": "13"
            }
        }
      ]
    };

    sock.emit('tweets:all', tracks);

  })

};

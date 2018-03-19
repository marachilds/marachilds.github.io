var footer = {
    "text": "V3.0.2. Ⓒ 2018 Mara Childs."
};

footer.display = function() {

    var formattedFooter = HTMLfooter.replace("%data%", footer.text);
    $("#copyright").append(formattedFooter);
    
};

footer.display();

var nav = {
    "links": [
        {
            "name": "résumé",
            "url": "files/MaraChilds_Resume.pdf"
        },
        {
            "name": "contact",
            "url": "contact.html"
        },
        {
            "name": "about",
            "url": "about.html"
        },
        {
            "name": "work",
            "url": "work.html"
        },
        {
            "name": "home",
            "url": "index.html"
        }
    ]
};

nav.display = function() {
    for(i = 0; i < nav.links.length; i++) {
        
        var formattedNavName = HTMLnavLink.replace("%data%", nav.links[i].url);
        var formattedNavLink = HTMLnavName.replace("%data%", nav.links[i].name);
        
        var formattedNav = formattedNavName + formattedNavLink;
        
        $("#nav").append(formattedNav);
        
    }
};

nav.display();

var music = {
    "songs": [
        {
            "url": "https://open.spotify.com/track/6xcFiwq0W65JV4yCDzSqfL?si=lZUp4t1ZTe-5bhA8I4mPgQ",
            "title": "Run Wild",
            "artist": "Laney Jones"
        },
        {
            "url": "https://open.spotify.com/track/5okvbLI5LTxfcpfiZyh3YU?si=ajgK2S3FRT25bpTXErEzmA",
            "title": "You & Me",
            "artist": "Mountenz"
        },
        {
            "url": "https://open.spotify.com/track/7tSVyj8v1s3YyF7fvkKiOC?si=b_Wgw1YLT8STdFq9MPanTQ",
            "title": "The Good Side",
            "artist": "Troye Sivan"
        },
        {
            "url": "https://open.spotify.com/track/3GweDldi2HrraUKLexWUeb?si=z5MjVLZxTv6-0ZzxzFSqsA",
            "title": "Cassette",
            "artist": "ayokay"
        },
        {
            "url": "https://open.spotify.com/track/3dJQLmbN6vyRNxLk3hkNbX?si=RPCQvcC5T1-OuhC74D_8Ag",
            "title": "Stay the Night",
            "artist": "Jukebox The Ghost"
        }
    ]
};

music.display = function() {
    for(i = 0; i < music.songs.length; i++) {
        
        var formattedSongLink = HTMLitemURL.replace("%data%", music.songs[i].url);
        var formattedSongTitle = HTMLitemTitle.replace("%data%", music.songs[i].title);
        var formattedSongArtist = HTMLitemAuthor.replace("%data%", music.songs[i].artist);
        
        var formattedSong = formattedSongLink + formattedSongTitle + formattedSongArtist;
        
        $("#music").append(formattedSong);
        
    }
};

music.display();

var movies = {
    "media": [
        {
            "url": "https://www.youtube.com/watch?v=W4zq9A3ur8c",
            "title": "The Good Place",
        },
        {
            "url": "https://www.youtube.com/watch?v=vbiiik_T3Bo",
            "title": "The End of the F***cking World",
        },
        {
            "url": "https://www.youtube.com/watch?v=5ELQ6u_5YYM",
            "title": "Black Mirror",
        },
        {
            "url": "https://www.youtube.com/watch?v=6Nxc-3WpMbg",
            "title": "Kingsman: The Golden Circle",
        },
        {
            "url": "https://www.youtube.com/watch?v=zB4I68XVPzQ",
            "title": "Star Wars: The Last Jedi",
        }
    ]
};

movies.display = function() {
    for(i = 0; i < movies.media.length; i++) {
        
        var formattedMediaURL = HTMLmovieURL.replace("%data%", movies.media[i].url);
        var formattedMediaTitle = HTMLmovieTitle.replace("%data%", movies.media[i].title);
        
        var formattedMedia = formattedMediaURL + formattedMediaTitle;
        
        $("#movies").append(formattedMedia);
        
    }
};

movies.display();

var reading = {
    "books": [
        {
            "url": "https://www.amazon.com/Dataclysm-Looking-Christian-Rudder-2014-09-09/dp/B01N1WAFKC/ref=sr_1_2?ie=UTF8&qid=1517089516&sr=8-2&keywords=dataclysm",
            "title": "Dataclysm",
            "author": "Christian Rudder"
        },
        {
            "url": "https://www.amazon.com/Hillbilly-Elegy-Memoir-Family-Culture/dp/0062300547/ref=sr_1_1?s=books&ie=UTF8&qid=1517089622&sr=1-1&keywords=hillbilly+elegy",
            "title": "Hillbilly Elegy",
            "author": "J. D. Vance"
        },
        {
            "url": "https://www.amazon.com/Originals-How-Non-Conformists-Move-World/dp/014312885X/ref=sr_1_1?s=books&ie=UTF8&qid=1517089859&sr=1-1&keywords=originals",
            "title": "Originals",
            "author": "Adam Grant"
        },
        {
            "url": "https://www.amazon.com/Best-American-Infographics-2016-%C2%AE/dp/0544556380/ref=sr_1_1?s=books&ie=UTF8&qid=1507737531&sr=1-1&keywords=best+american+infographics",
            "title": "The Best American Infographics",
            "author": "Gareth Cook, Robert Krulwich"
        }
    ]
};

reading.display = function() {
    for(i = 0; i < reading.books.length; i++) {
        
        var formattedBookLink = HTMLitemURL.replace("%data%", reading.books[i].url);
        var formattedBookTitle = HTMLitemTitle.replace("%data%", reading.books[i].title);
        var formattedBookAuthor = HTMLitemAuthor.replace("%data%", reading.books[i].author);
        
        var formattedBook = formattedBookLink + formattedBookTitle + formattedBookAuthor;
        
        $("#books").append(formattedBook);
        
    }
};

reading.display();

var people = {
    "person": [
        {
            "url": "http://christineherrin.com/",
            "name": "Christine Herrin",
        },
        {
            "url": "https://www.instagram.com/thisisvictoriachang/",
            "name": "Victoria Chang",
        },
        {
            "url": "http://www.adamjkurtz.com/",
            "name": "Adam J. Kurtz",
        },
        {
            "url": "https://natalielew.com/",
            "name": "Natalie Lew",
        },
        {
            "url": "https://medium.com/@joulee",
            "name": "Julie Zhuo",
        }
    ]
};

people.display = function() {
    for(i = 0; i < people.person.length; i++) {
        
        var formattedPersonURL = HTMLnounURL.replace("%data%", people.person[i].url);
        var formattedPersonName = HTMLnounName.replace("%data%", people.person[i].name);
        
        var formattedPerson = formattedPersonURL + formattedPersonName;
        
        $("#people").append(formattedPerson);
        
    }
};

people.display();

var studios = {
    "studio": [
        {
            "url": "https://www.accurat.it/",
            "name": "Accurat",
        },
        {
            "url": "http://www.madebyalphabet.com/",
            "name": "Alphabet",
        },
        {
            "url": "http://www.farewell.nyc/",
            "name": "Farewell",
        },
        {
            "url": "https://www.mogollon-ny.com/",
            "name": "Mogollon",
        },
        {
            "url": "http://www.landl.us/",
            "name": "L+L",
        }
    ]
};

studios.display = function() {
    for(i = 0; i < studios.studio.length; i++) {
        
        var formattedStudioURL = HTMLnounURL.replace("%data%", studios.studio[i].url);
        var formattedStudioName = HTMLnounName.replace("%data%", studios.studio[i].name);
        
        var formattedStudio = formattedStudioURL + formattedStudioName;
        
        $("#studios").append(formattedStudio);
        
    }
};

studios.display();

var thoughts = {
    "source": [
        {
            "url": "https://waitbutwhy.com/",
            "name": "Wait But Why",
        },
        {
            "url": "https://www.youtube.com/user/Kurzgesagt",
            "name": "In A Nutshell",
        },
        {
            "url": "https://www.recode.net/recode-decode-podcast-kara-swisher",
            "name": "Recode Decode",
        },
        {
            "url": "https://stownpodcast.org/",
            "name": "S-Town",
        },
        {
            "url": "https://www.youtube.com/channel/UCr3cBLTYmIK9kY0F_OdFWFQ",
            "name": "Casually Explained",
        }
    ]
};

thoughts.display = function() {
    for(i = 0; i < thoughts.source.length; i++) {
        
        var formattedSourceURL = HTMLnounURL.replace("%data%", thoughts.source[i].url);
        var formattedSourceName = HTMLnounName.replace("%data%", thoughts.source[i].name);
        
        var formattedSource = formattedSourceURL + formattedSourceName;
        
        $("#thoughts").append(formattedSource);
        
    }
};

thoughts.display();
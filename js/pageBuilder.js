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
            "url": "resume.html"
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
        
        $("nav").append(formattedNav);
        
    }
};

nav.display();

$("music").append("<p>hi</p>");

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
        
        var formattedSongLink = HTMLitemURL.replace("%data%", nav.songs[i].url);
        var formattedSongTitle = HTMLitemTitle.replace("%data%", nav.songs[i].title);
        var formattedSongArtist = HTMLitemAuthor.replace("%data%", nav.songs[i].artist);
        
        var formattedSong = formattedSongLink + formattedSongTitle + formattedSongArtist;
        
        $("music").append(formattedSong);
        
    }
};

music.display();
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
function search(){
    // Obtain the genre
    var genre_checkbox = document.getElementsByName('genre');
    var genre;
    for(i = 0; i < genre_checkbox.length; i++) {
        if(genre_checkbox[i].checked){
            genre = genre_checkbox[i].value;
            break;
        }
    }

    // Obtain the target
    var targets_checkbox = document.getElementsByName('target');
    var target;
    for(i = 0; i < targets_checkbox.length; i++) {
        if(targets_checkbox[i].checked){
            target = targets_checkbox[i].value;
            break;
        }
    }

    // Get Actor
    var actor = document.getElementById('Actor').value;

    // Get Country
    var country = document.getElementById('Made').value;

    // Get Director
    var director = document.getElementById('Director').value;

    // Get length
    var length = document.getElementById('length').value;

    data(genre, target, actor, country, director, length);
}

function data(genre, target, actor, country, director, length){
    var choice = "";
    
    // Data
    var movies = {
        "Alien (1979)": {
            "title": "Alien (1979)",
            "director": "Ridley Scott",
            "genre": "Sci-Fi, Thriller, Horror, Action",
            "length": "117",
            "country": "USA",
            "actors": "Sigourney Weaver",
            "target": "Adults",
            "trailer": "https://www.youtube.com/embed/jQ5lPt9edzQ"
        },
        "The Sorcerer's Apprentice (2010)": {
            "title": "The Sorcerer's Apprentice (2010)",
            "director": "Jon Turteltaub",
            "genre": "Fantasy, Adventure, Comedy, Action",
            "length": "106",
            "country": "USA",
            "actors": "Nicolas Cage",
            "target": "Families, Teenagers",
            "trailer": "https://www.youtube.com/embed/v2uV0_1C4UM"
        },
        "Aladdin (1992)": {
            "title": "Aladdin (1992)",
            "director": "Ron Clements",
            "genre": "Adventure, Musical, Fantasy, Drama, Romance",
            "length": "90",
            "country": "USA",
            "actors": "Robin Williams",
            "target": "Families, Teenagers, Children",
            "trailer": "https://www.youtube.com/embed/eTjHiQKJUDY"
        },
        "The Hateful Eight (2015)": {
            "title": "The Hateful Eight (2015)",
            "director": "Quentin Tarantino",
            "genre": "Adventure, Western, Mystery, Thriller",
            "length": "167",
            "country": "USA",
            "actors": "Samuel L. Jackson",
            "target": "Adults",
            "trailer": "https://www.youtube.com/embed/nIOmotayDMY"
        }
    }

    // Preprocessing
    if(genre === "Any"){
        genre = "";
    }

    if(target === "Any"){
        target = "";
    }

    actor = actor.toLowerCase();

    country = country.toLowerCase();

    director = director.toLowerCase();

    // Find the movie
    for(var movie in movies){
        if (movies[movie]['genre'].includes(genre)) {
            if (JSON.stringify(movies[movie]['target']).includes(target)){
                if (parseInt(movies[movie]['length']) <= parseInt(length)) {
                    if (actor === "" || JSON.stringify(movies[movie]['actors']).toLowerCase().includes(actor)){
                        if (director === "" || JSON.stringify(movies[movie]['director']).toLowerCase().includes(director)){
                            if (country === "" || JSON.stringify(movies[movie]['country']).toLowerCase().includes(country)){
                                choice = movies[movie];
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    // Output if no movie satisfies the criteria
    if (choice == "") {
        alert("No movies found. Try different search criteria.");
    } else{
        sessionStorage.setItem("trailer", choice['trailer']);
        sessionStorage.setItem("title", choice['title']);
        sessionStorage.setItem("director", 'Director: ' + choice['director']);
        sessionStorage.setItem("genre", 'Genre(s): ' + choice['genre']);
        sessionStorage.setItem("length", 'Length: ' + choice['length'] + ' minutes');
        sessionStorage.setItem("country", 'Made in: ' + choice['country']);
        sessionStorage.setItem("actors", 'Main actor(s): ' + choice['actors']);
        sessionStorage.setItem("target", 'Target(s): ' + choice['target']);
        location.href='movie_suggestion.html';
    }    
}
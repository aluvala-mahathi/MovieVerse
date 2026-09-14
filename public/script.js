const movies = [
    {
        title: "SpiderMan",
        genre: "Action-Adventure",
        rating: "8.8",
        image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg
    },
    {
        title: "The LionKing",
        genre: "Animation-Adventure",
        rating: "8.7",
        image: "https://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg"
    },
    {
        title: "Avatar",
        genre: "Adventure",
        rating: "7.9",
        image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },
    {
        title: "The Batan",
        genre: "Action=Adventure",
        rating: "7.8",
        image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    }
];
const container =
document.getElementById("movieContainer");

function displayMovies(movieList) {

    if (!container) return;


    container.innerHTML = "";


    movieList.forEach(movie => {

        const card =
        document.createElement("div");


        card.classList.add("movie-card");


        card.innerHTML = `

            <div class="poster-container">

                <img
                src="${movie.image}"
                alt="${movie.title}">

                <span class="genre-label">
                    ${movie.category}
                </span>

            </div>
<div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <p class="genres">
                    ${movie.genres}
                </p>


                <div class="movie-bottom">

                    <span class="rating">
                        ⭐ ${movie.rating}
                    </span>


                    <button class="view-btn">
                        View Details →
                    </button>

                </div>

            </div>

        `;


        container.appendChild(card);

    });

}


/* DISPLAY ALL MOVIES */
displayMovies(movies);


/* ================= CATEGORY FILTER ================= */

const categoryButtons =
document.querySelectorAll(".category");


categoryButtons.forEach(button => {

    button.addEventListener(
        "click",

        () => {

            categoryButtons.forEach(btn =>
                btn.classList.remove(
                    "active-category"
                )
            );


            button.classList.add(
                "active-category"
            );
              const category =
            button.innerText;


            if (category === "All") {

                displayMovies(movies);

            }

            else {

                const filteredMovies =
                movies.filter(movie =>
                    movie.category === category
                );


                displayMovies(
                    filteredMovies
                );

            }

        }

    );
});
const searchInput =
document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener(
        "input",

        () => {

            const value =
            searchInput.value.toLowerCase();


            const filteredMovies =
            movies.filter(movie =>

                movie.title
                .toLowerCase()
                .includes(value)

            );


            displayMovies(
                filteredMovies
            );

        }

    );

}
// const $ = require("jquery");
let data = [
    {
        img: "images/shawshank.jpg",
        title: "The Shawshank Redemption",
        release: 1994,
        age: 16,
        genre: "Drama",
        rate: 9.2,
        fullRate: 9.2,
        votes: 2318988,
    },
    {
        img: "images/godfather.jpg",
        title: "The Godfather",
        release: 1972,
        age: 16,
        genre: "Crime",
        rate: 9.1,
        fullRate: 9.1,
        votes: 1601382,
    },
    {
        img: "images/knight.jpg",
        title: "The Dark Knight",
        release: 2008,
        age: 14,
        genre: "Action",
        rate: 9.0,
        fullRate: 9.01,
        votes: 2281127,
    },
    {
        img: "images/godfather2.jpg",
        title: "The Godfather Part-II",
        release: 1974,
        age: 16,
        genre: "Crime",
        rate: 9.0,
        fullRate: 9.0,
        votes: 1118487,
    }, 
    {
        img: "images/12.jpg",
        title: "12 Angry Men",
        release: 1957,
        age: 16,
        genre: "Crime",
        rate: 8.9,
        fullRate: 8.93,
        votes: 687.375,
    }, 
    {
        img: "images/returnking.jpg",
        title: "Return of the King",
        release: 2003,
        age: 12,
        genre: "Action",
        rate: 8.9,
        fullRate: 8.92,
        votes: 1627850,
    },
    {
        img: "images/pulp.jpg",
        title: "Pulp Fiction",
        release: 1994,
        age: 18,
        genre: "Crime",
        rate: 8.9,
        fullRate: 8.91,
        votes: 1809133,
    }, 
    {
        img: "images/schindler.jpg",
        title: "Schindler's List",
        release: 1993,
        age: 16,
        genre: "Drama",
        rate: 8.9,
        fullRate: 8.90,
        votes: 1202657,
    }
];
$(document).ready(function () {
    buildProductView(data);
});
$(".rate").on("click", () => {
    let low = data.sort((a, b) => a.fullRate - b.fullRate);
    buildProductView(low);
});
$(".votes").on("click", () => {
    let low = data.sort((a, b) => a.votes - b.votes);
    buildProductView(low);
});
$(".release").on("click", () => {
    let low = data.sort((a, b) => a.release - b.release);
    buildProductView(low);
});

function buildProductView(products) {

    let fullCardContainer = products.map((elem) => {
            let product = '<div class="col-lg-3 col-md-6 col-sm-12 net" data-aos="zoom-in">'+
            '<div class="card hvr-grow">'+
                '<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">'+
                    '<img src="'+elem.img+'" class="img-fluid"/>'+
                    '<a href="#!"><div class="mask"></div></a>'+
                '</div><div class="card-body">'+
                    '<h6 class="card-title">'+elem.title+' ('+elem.release+')</h6>'+
                    '<p class="card-text imdb">'+elem.age+'+ | '+elem.genre+'</p>'+
                    '<p class="card-text imdb">Rating: '+elem.rate+'</p>'+
                    '<p class="card-text imdb">Votes: '+elem.votes+' <i class="far fa-eye"></i></p>'+
                    '<a href="#!" class="btn btn-primary">Go Watch</a>'+
                '</div></div></div>'
                    return product;
        }).join('');
    $("#products").empty();
    $("#products").append(fullCardContainer);
}
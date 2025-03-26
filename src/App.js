import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand text-danger fw-bold" href="#">
          BookMyShow
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Stream</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">List Your Show</a>
            </li>
          </ul>
          <form className="d-flex me-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger text-white" type="submit">
              Search
            </button>
          </form>
          <button className="btn btn-outline-danger">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

const Carousel = () => {
  const images = [
    "https://hippy.in/wp-content/uploads/2014/06/custom-hand-painted-bollywood-posters-2.jpg",
    "https://media-cache.cinematerial.com/p/500x/9hjsiqnt/mrs-indian-movie-poster.jpg?v=1737964631",
    "https://m.media-amazon.com/images/I/91GONzCyOcL.jpg",
    "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
    "https://content.tupaki.com/en/feeds/2024/11/17/592239-k.webp",
    "https://m.media-amazon.com/images/M/MV5BMWI4N2Y5NWUtNzEwOC00YjYzLWEzY2ItN2YwYTIxYzBjZGZmXkEyXkFqcGc@._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC8GqQZKO93Ep9kFQ3zUy6ftNLsxZVDp3Uw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResrAmxxXPsL5n5DN2F8u_4Wmko3KBgBWjCA&s",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0IfyAU2VKhi9idE-H29QfleuY1PmgTbmoKsk9ixU-GtYxSSLL8IUKA2wZ6x6ubTEwg7iQ",
    "https://chinmaynakhwa.wordpress.com/wp-content/uploads/2024/12/wp-17330509377335887121407943125489.jpg?w=640"

    
  ];

  return (
    <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={img} className="d-block w-100" height="400" alt={`Movie ${index + 1}`} />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#movieCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#movieCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};


const movies = [
  {
    title: "Jab We Met",
    description: "A romantic film featuring Kareena Kapoor and Shahid Kapoor.",
    image: "https://hippy.in/wp-content/uploads/2014/06/custom-hand-painted-bollywood-posters-2.jpg",
    price: "$10",
    rating: "8.1/10",
    releaseDate: "October 26, 2007",
  },
  {
    title: "Mrs.",
    description: "A woman redefines her role in society with strength and independence.",
    image: "https://media-cache.cinematerial.com/p/500x/9hjsiqnt/mrs-indian-movie-poster.jpg?v=1737964631",
    price: "$12",
    rating: "8.9/10",
    releaseDate: "March 15, 2024",
  },
  {
    title: "Devdas",
    description: "A tragic love story leading to self-destruction and eternal longing.",
    image: "https://m.media-amazon.com/images/I/91GONzCyOcL.jpg",
    price: "$15",
    rating: "8.0/10",
    releaseDate: "July 12, 2002",
  },
  {
    title: "Lagaan",
    description: "Villagers challenge British officers in a high-stakes cricket match.",
    image: "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
    price: "$14",
    rating: "8.5/10",
    releaseDate: "June 15, 2001",
  },
  {
    title: "Kantara",
    description: " Kantara: A Legend - Chapter 1, is a Kannada-language prequel to the 2022 film Kantara, exploring the origins of the folklore and deities featured in the first film, set during the Kadamba dynasty era.",
    image: "https://content.tupaki.com/en/feeds/2024/11/17/592239-k.webp",
    price: "$20",
    rating: "8.7/10",
    releaseDate: " 2025",
  },
  {
    title: "Majili",
    description: "Majili is a 2019 Telugu romantic drama about Poorna, a failed cricketer who struggles to move on from a past love, and his eventual marriage to Sravani, a woman who loves him unconditionally, leading to a journey of healing and rediscovering love",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResrAmxxXPsL5n5DN2F8u_4Wmko3KBgBWjCA&s",
    price: "$11",
    rating: "8.5/10",
    releaseDate: "march 19, 2019",
  },
  {
    title: "chaava",
    description: "Chhaava is a 2025 Hindi-language historical action film based on the life of Chhatrapati Sambhaji Maharaj. .",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0IfyAU2VKhi9idE-H29QfleuY1PmgTbmoKsk9ixU-GtYxSSLL8IUKA2wZ6x6ubTEwg7iQ",
    price: "$15",
    rating: "8.8/10",
    releaseDate: "Feb 14, 2025",
  },
  {
    title: "Sookshamadarshini",
    description: "Sookshmadarshini is a 2024 Malayalam thriller film starring Nazriya Nazim and Basil Joseph.y",
    image: "https://chinmaynakhwa.wordpress.com/wp-content/uploads/2024/12/wp-17330509377335887121407943125489.jpg?w=640",
    price: "$14",
    rating: "8.5/10",
    releaseDate: "Jan 15, 2024",
  }
];

const MovieCard = ({ title, description, image, price, rating, releaseDate }) => {
  return (
    <div className="col">
      <div className="card h-100 d-flex flex-column">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body  d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><strong>Price:</strong> {price}</p>
          <p className="card-text"><strong>Rating:</strong> {rating}</p>
          <p className="card-text"><strong>Release Date:</strong> {releaseDate}</p>
          <a href="#" className="btn btn-primary">Book Now</a>
        </div>
      </div>
    </div>
  );
};


const MovieList = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-auto row-cols-md-4 g-4">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="text-center p-3 bg-danger text-white">&copy; 2025 BookMyShow. All Rights Reserved.</div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-5 text-white text-center bg-danger">
        <h1>Welcome to BookMyShow</h1>
        <p>Book your favorite movies with ease!</p>
      </div>
      <Carousel />
      <MovieList />
      <Footer />
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";


function Mainpage() {
  const [movie, setMovie] = useState("");
  const [artist, setArtist] = useState("");
  const [darkmode, setDarkmode] = useState(false);

  const movies = {
    movies: [
      {
        title: "24",
        artists: ["Surya", "Samantha", "Vikram Kumar", "AR Rahman"],
        poster:
          "https://3.bp.blogspot.com/-PvQozlxukRI/WG0zVnrmdQI/AAAAAAAAAW0/WVeGpw7EyYoyWGEaae0lMaS6ENGm3Qn1gCLcB/s1600/24-Movie-Stills-and-Posters.jpg",
      },
      {
        title: "Gifted",
        artists: ["Chris Evans", "Grace", "Jenny"],
        poster: "https://tse1.mm.bing.net/th?id=OIP.tRM7QlGAtqqVDUeCIFGD0QHaEK&pid=Api&P=0&h=220",
      },
      {
        title: "Incredibles",
        artists: ["Brad Bird", "Walt Disney", "Stephen", "Andrew"],
        poster:
          "https://images.hdqwalls.com/wallpapers/the-incredibles-2-poster-new-qd.jpg",
      },
      {
        title: "Avengers",
        artists: ["Robert Downey", "Chris Evans", "Chris Hemsworth", "Scarlett Johansson"],
        poster: "https://wallpapercave.com/wp/eB5PrOP.jpg",
      },
      {
        title: "SpiderMan",
        artists: ["Tom Holland", "Zendaya", "Jon Watts", "Jake"],
        poster:
          "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Spider-Man-Movie-Posters.jpg",
      },
      {
        title: "Barbie",
        artists: ["Margot Robbie", "Ryan Gosling", "Emma", "Greta"],
        poster: "https://www.wallpapersun.com/wp-content/uploads/2023/07/Margot-Robbie-Barbie-Wallpapersun-4.jpg",
      },
    ],
  };

  const ChangeMovie = (e) => {
    const selectedMovie = e.target.value;
    setMovie(selectedMovie);
    setArtist("");
    localStorage.setItem("selectedMovie", selectedMovie);
  };

  useEffect(() => {
    const savedMovie = localStorage.getItem("selectedMovie");
    const savedArtist = localStorage.getItem("selectedArtist");

    if (savedMovie) {
      setMovie(savedMovie);
    }
    if (savedArtist) {
      setArtist(savedArtist);
    }
  }, []);

  const toggle = () => {
    setDarkmode((prevMode) => !prevMode);
  };
  

  const selectedMovie = movies.movies.find((m) => m.title === movie);

  

  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 0",
          height: "70px",
          background: darkmode
            ? "linear-gradient(0deg, rgb(102, 108, 108) , rgba(19,19,20,1))"
            : "#265c99",
        }}
      >
        <a href="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png"
            alt="Website Logo"
            style={{ width: "120px", height: "50px" }}
          />
        </a>
        <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          MY MOVIES
        </h1>
        <a style={{ marginLeft: "auto", marginRight: "50px" }}>
          <FontAwesomeIcon icon={faHome} size="2x" />
        </a>
        <a style={{ marginRight: "40px" }}>
          <FontAwesomeIcon icon={faSearch} size="2x" style={{ marginRight: "20px" }} />
        </a>
        <a style={{ marginRight: "30px" }}>
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" style={{ marginRight: "20px" }} />
        </a>
        <a style={{ marginRight: "20px" }}>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </a>
      </header>

      <div
        style={{
            position: "relative",
            minHeight: "100vh", 
            height: "auto", 
            background: darkmode
              ? "linear-gradient(0deg, rgb(13, 16, 16), rgb(6, 6, 7))"
              : "linear-gradient(135deg, #a4d4f7, #265c99)",
            color: darkmode ? "#f5f5f5" : "#121212",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", 
            width: "100%", 
            overflowX: "hidden" 
          }}
          
      >
        <button
          style={{
            top: "20px",
            marginLeft: "92%",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "15px",
            backgroundColor: darkmode ? "#f5f5f5" : "#121212",
            color: darkmode ? "#121212" : "#f5f5f5",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.4)",
          }}
          onClick={toggle}
        >
          {darkmode ? "Light Mode" : "Dark Mode"}
        </button>

        <div
          style={{
            // background: darkmode
            //   ? "linear-gradient(0deg, rgb(51, 55, 55) , rgb(8, 8, 8))"
            //   : "linear-gradient(135deg, #a4d4f7, #265c99)",
            // width: "70%",
             marginLeft: "30px",
            // borderRadius: "20px",
            // height: "430px",
            // marginTop: "50px",
            // paddingBottom: "20px",
            // textAlign: "center",
            // boxShadow: "inset 0px 4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // gap: "20px",
            color: darkmode ? "#f5f5f5" : "#121212",
          }}
        >
          <div style={{ marginRight: "40px", fontSize: "23px" }}>
            <h2 style={{ paddingRight: "10px" }}>Favourite Movie:</h2>
            <div style={{ paddingRight: "10px" }}>
              <input
                style={{
                  padding: "15px",
                  borderRadius: "7px",
                  backgroundColor: darkmode ? "#f5f5f5" : "#121212",
                  color: darkmode ? "#121212" : "#f5f5f5",
                }}
                placeholder="Movie"
                value={movie}
                readOnly
              />
            </div>
            <select
              value={movie}
              onChange={ChangeMovie}
              style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "15px",
                backgroundColor: "rgb(239, 59, 53)",
                color: "white",
              }}
            >
              <option value="">Select Movie</option>
              {movies.movies.map((movie, index) => (
                <option key={index} value={movie.title}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>

          {selectedMovie && (
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
              style={{
                width: "900px", 
                height: "400px", 
                display: "block", 
                margin: "0 auto", 
                marginLeft:"40px",
                objectFit: "cover", 
                transform: "scale(1)", 
                transition: "transform 0.4s ease-in-out" 
              }}
              
            />
          )}
        </div>
        <br></br>
        <h2> Movies</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.geZ8Bk8rtvwneC1dhdxg9QHaK4&pid=Api&P=0&h=220"
        alt="movie poster 1"
        onClick="movie poster 1"
        style={{ width: "150px",height:"235px" }}
      />
      <p>Aladdin</p>
    </div>
    
    <div style={{ textAlign: "center" }}>
      <img
        src="https://cdna.artstation.com/p/assets/images/images/063/096/684/large/william-j-harris-oppenheimer-movie-poster-2023.jpg?1684720979"
        alt="movie poster"
        style={{ width: "150px",height:"235px" }}
      />
      <p>Oppenheimer</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg"
        alt="movie poster"
        style={{ width: "150px",height:"235px" }}
      />
      <p>John Wick</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaa261108050255.5fb629683b2f1.jpg"
        alt="movie poster"
        style={{ width: "155px",height:"235px" }}
      />
      <p>Titanic</p>
      </div>
      <div style={{ textAlign: "center" }}>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.uhATMeafutWZunoOy9Z71QHaKB&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "160px",height:"235px" }}
      />
      <p>Bahubali</p>
      </div>
      <div style={{ textAlign: "center" }}>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.srnf5DuiIudv7eus9z3cMQHaJ4&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "160px",height:"235px" }}
      />
      <p>Chennai express</p>
      </div>
      <div style={{ textAlign: "center" }}>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.KBdiBpfXcEd4TGxGGOCsKwHaKt&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"235px" }}
      />
      <p>Tamasa</p>
      </div>
      <div style={{ textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.shcEy2eWqfr_BvZubeRgiQHaKB&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"232px" }}
      />
      <p>Darbar</p>
    </div>
      
      
  </div>
</div>
<h2>Fictional Movies</h2>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMDNlNGYxZGQtN2I2Yi00OWQyLWFmOTItOWMzMDU4MmJkYmQ0XkEyXkFqcGc@._V1_.jpg"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>24</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRFwWjp8Mmd5XdThHiSQnlpTRIcMiBBPek5fSJBK3tLlQkLQ1y"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>Gifted</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>Incredibles</p>
      
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>Justice League</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>Avengers</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>SpiderMan</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v8_am.jpg"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>Barbie</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.XBmcgoV1_7KJFKo_1Yb2WwHaKX&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"228px" }}
      />
      <p>Jawaan</p>
    </div>
    


    </div>
    </div>
    <h2>Tamil Movies</h2>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMDNlNGYxZGQtN2I2Yi00OWQyLWFmOTItOWMzMDU4MmJkYmQ0XkEyXkFqcGc@._V1_.jpg"
        alt="movie poster"
        style={{ width: "150px",height:"235px" }}
      />
      <p>24</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.AoDOP676ZCg-7xrAQEmnJQHaLe&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>Mersal</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.7PD7cVpKXxWFzhFKg_qgzgHaJ4&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "160px",height:"235px" }}
      />
      <p>Vikram vedha</p>
      
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.yYC4T2gMDwioSm2rgFeDwwHaLj&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>Hero</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.7JwxELDEkkQEU5eZRP2x_gHaLk&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px" }}
      />
      <p>Teddy</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.HnSyiKz7TWTUpmRdaxVpcgHaK-&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"235px" }}
      />
      <p>Comali</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.xJIqtsBjYbiy5sDvhjFYxQHaKe&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"235px" }}
      />
      <p>Kabali</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.niyGLlYHRKX2mbwBUokfiAHaKG&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "160px",height:"235px" }}
      />
      <p>Kana</p>
    </div>
    


    </div>
    </div>
      </div>
      

    </>
  );
}

export default Mainpage;

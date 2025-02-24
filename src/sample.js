import React from "react";

import { useEffect, useState } from "react";
import "./App.css";
function Main() {
  const [movie, setMovie] = useState(""); 
  const [artist, setArtist] = useState("");
  const [darkmode, setDarkmode] = useState(false);

  const movies = {
    "movies": [
      {
        "title": "24",
        "artists": ["Surya","Samantha", "Vikram Kumar","AR Rahman"],
        "poster":"https://m.media-amazon.com/images/M/MV5BMDNlNGYxZGQtN2I2Yi00OWQyLWFmOTItOWMzMDU4MmJkYmQ0XkEyXkFqcGc@._V1_.jpg",
      },
    {
        "title": "Gifted",
        "artists":["Chris Evans","Grace","Jenny"],
        "poster": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRFwWjp8Mmd5XdThHiSQnlpTRIcMiBBPek5fSJBK3tLlQkLQ1y"
      },
      {
        "title": "Incredibles",
        "artists": ["Brad Bird", "Walt Disney", "Stephen", "Andrew"],
        "poster": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
       // "video":<iframe width="560" height="315" src="https://www.youtube.com/embed/-UaGUdNJdRQ?si=Xrj6DDmzRz03HvGv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      },
      {
        "title": "Avengers",
        "artists": ["Robert Downey", "Chris Evans", "Chris Hemsworth", "Scarlett Johansson"],
        "poster": "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg",
       // "video": <iframe width="560" height="315" src="https://www.youtube.com/embed/eOrNdBpGMv8?si=psGciuADUOs0RJUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      },
      {
        "title": "SpiderMan",
        "artists": ["Tom Holland", "Zendaya", "Jon Watts", "Jake"],
        "poster": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ"
      },
      {
        "title": "Barbie",
        "artists": ["Margot Robbie", "Ryan Gosling", "Emma", "Greta"],
        "poster": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v8_am.jpg"
      }
    ]
  };
  const ChangeMovie = (e) => {
    const selectedMovie = e.target.value;
    setMovie(selectedMovie);
    setArtist(""); 
    localStorage.setItem("selectedMovie", selectedMovie);
  };
const ChangeArtist = (e) => {
    const selectedArtist = e.target.value;
    setArtist(selectedArtist);
    localStorage.setItem("selectedArtist", selectedArtist);
  };

  
    useEffect(() => {
    const savedMovie = localStorage.getItem("SelectMovie");
    const savedArtist = localStorage.getItem("SelectArtist");

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

  const selectedMovie = movies.movies.find(m => m.title === movie);

  return (
    <>
      <header style={{display:"flex",alignItems:"center",padding:"10px 0",height:"70px",background:darkmode? "rgb(80, 84, 87)" : "rgb(29, 27, 136)"}}>
        <a href="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png" target="_blank" rel="noopener noreferrer">
          <img src="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png" alt="Website Logo" style={{width:"120px",height:"50px"}} />
        </a>
        <h1 style={{textAlign:"center",marginTop:"20px",fontSize:"30px",color: darkmode ? "#f5f5f5" : "#121212"}}>MY MOVIES</h1>
      </header>
      
      <div style={{position:"relative",height:"100vh",background:darkmode? "rgb(128, 124, 119)" : "linear-gradient(0deg, rgb(127, 185, 216) 0%, rgb(18, 46, 170) 100%)",color: darkmode ? "#f5f5f5" : "#121212"}}>
        <button style={{
            top:"20px", marginLeft:"92%", marginTop:"10px", left:"20px", padding:"10px", borderRadius:"15px",
            backgroundColor: darkmode ? "#f5f5f5":"#121212", color:darkmode ? "#121212":"#f5f5f5",
            border:"none", cursor:"pointer", boxShadow:"0px 4px 8px rgba(0,0,0,0.4)"
          }} 
          onClick={toggle}>
          {darkmode ? "Light Mode" : "Dark Mode"}
        </button>

        <div>
          <div style={{
              backgroundColor: darkmode ? "rgb(61, 60, 58)" : "rgb(187, 171, 121)",
              width: "70%", marginLeft: "230px", borderRadius: "20px", height: "430px",
              marginTop: "50px", paddingBottom: "20px", 
              textAlign: "center",
              boxShadow: "inset 0px 4px 8px rgba(0,0,0,0.2)", 
              display: "flex",
              justifyContent: "center", 
              alignItems: "center",
               gap: "20px", 
              color: darkmode ? "#f5f5f5" : "#121212"
            }}>
            <div style={{ marginRight: "40px", fontSize:"23px" }}>
              <h2 style={{ paddingRight: "10px" }}>Favourite Movie:</h2>
              <div style={{ paddingRight: "10px" }}>
                <input style={{ padding: "15px", borderRadius: "7px", backgroundColor: darkmode ? "#f5f5f5" :"#121212", color: darkmode ? "#121212":"#f5f5f5" }}
                  placeholder="Movie" value={movie} readOnly />
              </div>
              <select value={movie} onChange={ChangeMovie} style={{
                  marginTop: "20px", padding: "15px", borderRadius: "15px", backgroundColor: "rgb(239, 59, 53)", color: "white"
                }}>
                <option value="">Select Movie</option>
                {movies.movies.map((movie, index) => ( // mapping for movie
                  <option key={index} value={movie.title}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginRight: "10px", fontSize:"23px" }}>
              {movie && (
                <>
                  <h2>Favourite Artists:</h2>
                  <div>
                    <input style={{ padding: "15px", borderRadius: "7px", backgroundColor: darkmode ? "#f5f5f5" :"#121212", color: darkmode ? "#121212":"#f5f5f5" }}
                      placeholder="Artists" value={artist} readOnly />
                  </div>
                  <select value={artist} onChange={ChangeArtist} style={{
                      marginTop: "20px", padding: "15px", borderRadius: "15px", backgroundColor: "rgb(239, 59, 53)", color: "white"
                    }}>
                    <option value="">Select Artist</option>


                    {selectedMovie?.artists.map((artistName, index) => ( // mapping for artist
                      <option key={index} value={artistName}>
                        {artistName}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
            

            {movie && selectedMovie?.poster && (
              <div>
                <img src={selectedMovie.poster} alt={`${movie} Poster`} 
                style={{width: "280px", height: "350px", marginLeft:"40px", borderRadius: "15px", boxShadow: "0px 4px 8px rgba(0,0,0,0.5)"}} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


  export default Main;
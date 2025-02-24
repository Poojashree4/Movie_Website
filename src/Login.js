import React, { useEffect, useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const jsondata = {
    users: [
      {
        email: "pooja@gm.com",
        password: "pass1234",
      },
      {
        email: "hello@cm.com",
        password: "password123",
      },
      {
        email: "good@cm.com",
        password: "pooja123",
      },
      {
        email: "morning@cm.com",
        password: "password987",
      },
    ],
  };

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(jsondata.users));
  }, []);

  function authenticate(email, password) {
    const storedUsers = JSON.parse(localStorage.getItem("usersData"));

    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    return user ? "Login Successful" : "Invalid credentials";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const authMessage = authenticate(email, password);
    setMessage(authMessage);
  };

  return (
    <div className="container">
      <div className="leftsection">
        <div className="int"></div>
      </div>
      <div className="right-section">
        <div className="greeting">
          <h3>Hello!</h3>
          
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h4 style={{marginLeft:"30px",marginTop:"10px"}}>Login to your account</h4>
          <p>Username</p>
          <input
            type="text"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="forgpass">forget password?</a>
          <br />
          <button type="submit">LOGIN</button>
          <a href="#" className="create-acc">Create Account</a>
        </form>
        {message && <p>{message}</p>}
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }
        body {
          background-image: url('https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-01.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          display: flex;
          flex-direction: row;
          background-color: white;
          width: 200%;
          height: 75vh;
          border-radius: 20px;
          overflow: hidden;
          margin-left: -180px;
        }
        .leftsection {
          background-color: rgb(33, 99, 165);
          color: rgb(33, 43, 67);
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20%;
          text-align: center;
          position: relative;
          box-shadow: 0px 10px 15px;
        }
        .int {
          width: 250px;
          height: 200px;
          background-image: url('https://png.pngtree.com/png-clipart/20230504/original/pngtree-free-vector-login-concept-illustration-png-image_9140539.png');
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }
        .right-section {
          width: 80%;
          padding: 50px;
          display: flex;
          background-color: #acd9f1;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 10px 15px;
        }
        .greeting h2 {
          font-size: 15px;
          color: #4f2cc7;
          margin-bottom: 10px;
        }
        .greeting h3 {
          font-size: 25px;
          color: #696565ea;
          margin-bottom: 5px;
        }
        .form h4 {
          font-size: 20px;
          color: #333333dc;
          margin-bottom: 15px;
        }
        .form input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #d2c9c9;
        }
        .form .forgpass {
          display: block;
          color: #4819e2;
          font-size: 8px;
          padding-bottom: 5px;
          margin-bottom: 20px;
          text-decoration: none;
        }
        button {
          width: 100%;
          padding: 15px;
          background-color: rgb(33, 99, 165);
          font-size: 15px;
          color: white;
          border: none;
          border-radius: 5px;
          margin-top: 20px;
          display: flex;
          cursor: pointer;
          justify-content: center;
          align-items: center;
        }
        .create-acc {
          display: block;
          text-align: center;
          color: #4f2cc7;
          font-size: 12px;
          margin-top: 20px;
          text-decoration: none;
        }
        @media screen and (max-width: 750px) {
          .container {
            flex-direction: column;
            width: 90%;
            height: auto;
            margin-left: 0; /* Reset margin for smaller screens */
          }
          .leftsection, .right-section {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;

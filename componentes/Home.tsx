import './home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      {/* If you have an image to display */}
      <img src="./img/some-image.jpg" alt="Some description" className="home-image" />
    </div>
  );
}

export default Home;

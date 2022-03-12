import './App.css';
import team from './assets/image-header-desktop.jpg'

function App() {
  return (
    <div className="App">
      <div id="main">
        <div id="content">
          <h2>Get <strong>insights</strong> that help your business grow.</h2>
          <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          <div id="stats">
            <div class="stat-item">
              <h3>10k+</h3>
              companies
            </div>
            <div class="stat-item">
              <h3>314</h3>
              templates
            </div>
            <div class="stat-item">
              <h3>12M+</h3>
              queries
            </div>
          </div>
        </div>
        <div id="highlight">
          <img src={team} alt="TEAM" />
        </div>
      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://github.com/rick1e">Alrick Brown</a>.
      </div>
    </div>
  );
}

export default App;

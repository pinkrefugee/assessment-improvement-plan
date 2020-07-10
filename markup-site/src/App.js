import React from 'react';
import logo from './logo.svg';
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className='header-content'>
            <div className='logo'>
              <h1>Logo</h1>
              <p>Blbla</p>
            </div>
            <ul>
              <li><h3>Text Link</h3></li>
              <li><h3>Text Link</h3></li>
              <li><h3>Text Link</h3></li>
              <li><h3>Text Link</h3></li>
            </ul>
          </div>
        </nav>
      </header>
      <section className='main'>
        <section className='section1'>
          <img src={image1} alt="" />
        </section>
        <section className='section2'>
          <article className='article1'>
            <img src={image2} alt="" />
            <p>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
          </article>
          <article className='article2'>
            <img src={image2} alt="" />
            <p>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
          </article>
          <article className='article3'>
            <img src={image2} alt="" />
            <p>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
          </article>
        </section>
        <section className='section3'>
          <article className='article4'>
            <div className='article-info'>
              <h3>Article title</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
              </div>
              <img src={image3} alt="" />
            </article>
        </section>
      </section>
      <footer>
        <section className='footer-info-container'>
          <section className='footer-info-content'>
            <h4>Line Block</h4>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
          </section>
          <section className='footer-info-content'>
            <h4>Line Block</h4>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
          </section>
          <section className='footer-info-content'>
            <h4>Line Block</h4>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
          </section>
          <section className='footer-info-content'>
            <h4>Line Block</h4>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
            <a href='#'>Link to somewhere</a>
          </section>
        </section>
        
      </footer>
    </div>
  );
}

export default App;

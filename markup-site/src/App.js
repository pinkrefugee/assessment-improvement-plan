import React from 'react';
import pic01 from './assets/pic01.jpg'
import pic02 from './assets/pic02.jpg'
import pic03 from './assets/pic03.jpg'
import pic04 from './assets/pic04.jpg'
import pic05 from './assets/pic05.jpg'
import pic06 from './assets/pic06.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <section className='header-content'>
          <h1>Full Motion</h1>
          <p>Some meaningful and thoughtful text that will encourage you to do the things you don't have to</p>
          <i class="fa fa-check-circle fa-3x" aria-hidden="true"></i>
        </section>
      </header>
      <main>
        <section className='main-content'>
          <article>
            <img src={pic01} alt=''></img>
            <div>
              <h3>Where does it come from?</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>Click</button>
            </div>
          </article>
          <article>
            <img src={pic02} alt=''></img>
            <div>
              <h3>Where does it come from?</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>Click</button>
            </div>
          </article>
          <article>
            <img src={pic03} alt=''></img>
            <div>
              <h3>Where does it come from?</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>Click</button>
            </div>
          </article>
          <article>
            <img src={pic04} alt=''></img>
            <div>
              <h3>Where does it come from?</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>Click</button>
            </div>
          </article>
          <article>
            <img src={pic05} alt=''></img>
            <div>
              <h3>Where does it come from?</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>Click</button>
            </div>
          </article>
          <article>
            <img src={pic06} alt=''></img>
            <div>
              <h3>Where does it come from?</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>Click</button>
            </div>
          </article>
        </section>
       </main>
      <footer>
        <section className='footer-info-container'>
          <h3>Etiam veroeros lorem</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className='footer-icons'>
            <a href=''><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
            <a href=''><i class="fa fa-facebook fa-3x" aria-hidden="true"></i></a>
            <a href=''><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
            <a href=''><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;

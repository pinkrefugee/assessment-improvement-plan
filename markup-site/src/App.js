import React, { useState } from 'react';
import pic01 from './assets/pic01.jpg'
import './App.css';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [idInput, setIdInput] = useState('');

  function loadData() {
    fetch(POSTS_URL)
    .then(response => response.json())
    .then(json => {
      setPosts(json.slice(0, 6));
    })
    .catch(error => {
      alert(`Seems like there is some sort of a ${error}`); 
    });
  }

  async function deleteData(id) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const postsArray = posts.filter(post => post.id !== +id);
      if (postsArray.length === posts.length) {
        throw new Error('Post not found');
      }
      setPosts(postsArray);
    } catch(err) {
      alert(err);
    }
  }

  return (
    <div className="App">
      <header>
        <section className='header-content'>
          <h1>Full Motion</h1>
          <p>Some meaningful and thoughtful text that will encourage you to do the things you don't have to</p>
          <i className="fa fa-check-circle fa-3x" aria-hidden="true"></i>
        </section>
      </header>
      <main>
        <section className='article-management'>
          <div>
            <button className='right-margin' onClick={loadData}>Load posts</button>
            <button onClick={() => deleteData(idInput)}>Remove post</button>
          </div>
          <div>
            <label className='right-margin'>Select article id to remove:</label>
            <input onInput={e => setIdInput(e.target.value)}></input>
          </div>
        </section>
        <section className='main-content'>
          <>
          {posts.map(post => {
            return (
            <article key={post.id}>
              <img src={pic01} alt=''></img>
              <div className='article-content'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button>Click</button>
              </div>
          </article>
            )
          })}
          </>
        </section>
       </main>
      <footer>
        <section className='footer-info-container'>
          <h3>Etiam veroeros lorem</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className='footer-icons'>
            <a href="/#"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
            <a href="/#"><i className="fa fa-facebook fa-3x" aria-hidden="true"></i></a>
            <a href="/#"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
            <a href="/#"><i className="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

function Home() {
  return (
    <Link className="botao" to="/login">
      Login
    </Link>
  );
}

export default Home;

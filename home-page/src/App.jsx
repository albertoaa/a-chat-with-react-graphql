import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'shards-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';

import Chat from 'chat/Chat';

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
      ipsum aliquet, dictum arcu eget, sodales nisl. Vestibulum egestas dapibus
      leo, nec tristique nunc malesuada et. Nulla faucibus, enim nec mollis
      efficitur, purus arcu dignissim nibh, et interdum justo lorem ac nibh.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas.
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Quisque lacus enim, pellentesque mattis venenatis nec, faucibus quis urna.
      Praesent luctus tempus nunc vel sollicitudin. Etiam tempor ullamcorper
      urna, ac sagittis lorem convallis nec. Integer erat lectus, efficitur a mi
      at, bibendum sodales elit. Phasellus vel dolor ut mauris mollis posuere.
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));

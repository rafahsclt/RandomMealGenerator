import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global'
import Main from './page/Main';

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

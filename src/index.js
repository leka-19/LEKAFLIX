import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';



const Pagina404 = () => (<div> Error 404 !Puxa vida, essa pagina não existe, escolhe ai algo que exista e vamos nos divertir, juntinhos ! </div>)

ReactDOM.render(
<BrowserRouter>
<Switch>
< Route path= "/" component={Home} exact/>
< Route path= "/cadastro/video" component={CadastroVideo} />
< Route path= "/cadastro/Categoria" component={CadastroCategoria} />
< Route  component={Pagina404} />


</Switch>
</BrowserRouter>,
  document.getElementById('root')
);


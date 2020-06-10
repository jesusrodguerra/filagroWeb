import React,{Fragment} from 'react';
import Header from './componentes/Header';
import Cards from './componentes/Cards'
import Tech from './componentes/Tech';
import Footer from './componentes/Footer';


function App() {
  return (
    <Fragment>
      <Header/>  
      <Cards/>
      <Tech/>
      <Footer/>
    </Fragment>
  );
}

export default App;

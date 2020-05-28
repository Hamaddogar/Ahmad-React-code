import React from 'react';
import Header from '../src/component/Header/Header'
import Slider from '../src/component/Body/Slider/slider'
 import Card from '../src/component/Body/Card/card'
  import Footer from '../src/component/footer/footer'

class App extends React.Component {
  render() {


    return (

      <div>
         <Header/>
         <Slider/>
         <Card/>
         <Footer/>
      </div>
    )

  }




}

 export default App
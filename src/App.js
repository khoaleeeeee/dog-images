import React, {Component} from 'react'
import Title from './Title.js'
import Photo from './Photo.js'
import Display from './Display.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      link: 'https://images.dog.ceo/breeds/puggle/IMG_080306.jpg'
    }
  }

  render(){
    const url = 'https://dog.ceo/api/breeds/image/random'

    const getPhoto = async () => {
      try{
        const res = await fetch(url);
        const data = await res.json();
        this.setState({link: data.message});
      }
      catch(error){
      }
    }

    return (

      <div>
        <Title title='Dog Image Genterator'/>
        <Photo imageLink={this.state.link}/>
        <Display getImage={getPhoto}/>

      </div>
    );
  }

}

export default App;

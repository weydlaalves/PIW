import React, { Component } from 'react';
import '../styles/Post.css';

class Post extends Component {
  constructor(props){
    super(props);
      this.nome = props.nome;
      this.post = props.post;
      this.id = props.id;
      this.receberlikes = props.receberlikes;
      this.state = {
        qtdLikes : props.qtdLikes, 
      }
    }
  
  
  incrementarLikes = () => {
    this.setState({
      qtdLikes: this.state.qtdLikes + 1,
      
    })
    console.log("dei o like");
    console.log(this.state.qtdLikes)
  }
  
  render() { 
    return (
      <div className = 'Post'>
        <div className = 'back-post'>
          <p> {this.nome}</p> <br></br>
          <p> {this.post}</p>
          <button
            onClick={() =>{this.incrementarLikes()}}
          >
          Curtidas {this.state.qtdLikes}
          </button>
           
        </div>
      </div>
      );
  }
}

 
export default Post;




import React, { Component } from 'react'
import { connect } from "react-redux";
import "../styles/Post.css"; 
import Navegador from '../imutavel/navegador';
import Post from '../paginas/Post';
import { fetchPosts, removerPost } from '../acoes';

class GaleriaPostes extends Component{
  
   //ERRO AQUI CORRIGIR DEPOIS
   /* componentDidMount =()=>{
        this.props.fetchPosts();
    }*/
    render() {
        let postes = [];
        console.log("mostar listadepostes");
        console.log(this.props.posts);
            if(this.props.posts != null){
                for (let p of this.props.posts){
                    postes.push(
                        <div>
                        <Post
                            nome= {p.nome}
                            post={p.post}
                            id = {p.id}
                            receberLikes={this.id}
                            qtdLikes={p.qtdLikes}
                        >
                        </Post> 
                        <button 
                            onClick={()=> {this.props.removerPostprops(p.id)}}
                            > 
                                Deletar Post                        
                        </button>
                        </div>
                    )
                }
            }
        return(
            <div>
                <Navegador></Navegador>
                {postes}
                
            </div>
        )
    } 
}   

const mapearEstadoParaProps = (state) => {
    return { posts: state.posts};
}
const rPostparaprops = (dispatch) => {
    return{
        removerPostprops:(post) => {
            dispatch(removerPost(post));
            console.log("ENVIEI PARA O RECUDER EXCLUIR O POST")
        },
        fetchPosts:() =>{
            dispatch(fetchPosts());
        }
    }
}

export default connect(mapearEstadoParaProps,rPostparaprops)(GaleriaPostes);
import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adicionarPost} from '../acoes';
import Navegador from '../imutavel/navegador';
import '../styles/CriarPostes.css';

const url_base = "http://rest.learncode.academy/api/Weydla/posts";

class CriarPostes extends Component {
    
    state = {
        id:"",
        nome:"",
        post:"",
        qtdLikes: 0,
        listadepost:[],

    }

    constructor(props){
        super(props);
        this.adicionarPost = props.adicionarPostprops;
    }
    atualizarPost = (event) =>{
        Axios({
            method:"GET",
            url: url_base,
            data: {
                nome: this.state.nome,
                post: this.state.post,
            }
        }).then((response)=>{
            this.setState({
                ...this.state,
                listadepost: response.data,
            })
        }) 
    }
    modificouPost =(event) =>{
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        })
        console.log(this.state)
    }
    submeterFormulario =(event) => {
        event.preventDefault();
        Axios({
            method:"POST",
            url: url_base,
            data: {
                nome: this.state.nome,
                post: this.state.post,
            }
        }).then((response)=>{
            console.log(response)
            this.atualizarPost();
        }) 
        this.props.adicionarPostprops({
            id: this.state.id,
            nome:this.state.nome, 
            post: this.state.post,
            qtdLikes:this.state.qtdLikes
        });
        this.setState({
            id:"",
            nome : "",
            post: "",
            qtdLikes: 0,
        })
       
   }
    render() {
        return ( 
            <div className = "postar">
                    <Navegador></Navegador>
                <div>
                    <p>Postagem</p>
                    <form onSubmit={this.submeterFormulario}>
                            <input 
                                id= "nome" 
                                onChange={this.modificouPost}
                                type="text"
                                placeholder="Nome"
                                value = {this.state.nome} />
                            <input
                                id="post"
                                onChange={this.modificouPost}
                                type="text"
                                placeholder="Digite Sua Mensagem"
                                value = {this.state.post}
                            />    
                        <button id="buttom-postar"type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        adicionarPostprops: (post) => {
            dispatch(adicionarPost(post))
        }
    };
}
export default connect(null,mapDispatchToProps)(CriarPostes);

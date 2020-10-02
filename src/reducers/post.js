import { ADICIONAR_POST, REMOVER_POST } from "../constants";

const intialState = {
    posts: [
                {"id": "1","nome":"Francisca Alves","post":"Eu preiro acreditar na beleza dos fins de tarde","qtdLikes":4},
                {"id": "2","nome":"Toinha","post":"Ontem eu vi seu Canio, ooó homem fei","qtdLikes":1},
                {"id": "3","nome":"Weydla Alves","post":"Aprendi a usar o insta","qtdLikes":0,
            }],
}

function reducerPost(state = intialState, acao){
   if(acao.type === ADICIONAR_POST){
    let new_state = {...state};
          new_state.posts.push({
            id : acao.payload.id,
            nome: acao.payload.nome,
            post: acao.payload.post,
            qtdLikes:acao.payload.qtdLikes,
    })
        return new_state;
    }
    if(acao.type === REMOVER_POST){
        let new_state = {...state};
        let index = new_state.posts.findIndex((post)=>(post.post === acao.payload.post));
           state.posts.splice(index,1);
           
           return new_state;
    }
    return state;
}
export default reducerPost;
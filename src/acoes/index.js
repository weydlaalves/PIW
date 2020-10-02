import Axios from "axios";
import { ADICIONAR_POST, FETCH_POST_SUCESSO,FETCH_POST_INICIADO, REMOVER_POST } from "../constants";

const url_base = "http://rest.learncode.academy/api/Weydla/posts";


export function adicionarPost(payload){ 
    return{type: ADICIONAR_POST, payload:payload}
}
export function removerPost(payload){
    return{type:REMOVER_POST,payload:payload}
}
export function fetchPostSucesso(payload){
    return{type:FETCH_POST_SUCESSO,payload:payload}
}
export function fetchPostsIniciado(payload){
    return{type:FETCH_POST_INICIADO,payload:payload}
}

export const fetchPosts = () => {
    return (dispatch, getState) => {
        dispatch(fetchPostsIniciado());
        Axios({
            method: 'GET',
            url: url_base,
        }).then((response) => {
            dispatch(fetchPostSucesso(response.data));
        });
    }
}

export const adicionarPosts = (post) => {
    return (dispatch, getState) => {
        Axios({
            method: 'POST',
            url: url_base,
            data: post
        }).then((response) => {
            console.log("ADICIONAR FUNFOU!");
        })
    }
}

export const removerPosts = (post) => {
    return (dispatch, getState) =>{
        Axios({
            method: "DELETE",
            url: url_base + "/" + post
        }).then((response) =>{
            console.log("DELETE FUNFOU");
            console.log(response);
            dispatch(fetchPosts());
        })
    }
};
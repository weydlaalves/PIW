const {createStore} = require("redux");
const { default: reducerPost } = require ("../reducers/post");

const store = createStore(reducerPost);

export default store;

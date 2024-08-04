import {takeLatest} from "redux-saga/effects";
function * getPosts(){
    alert('get posts')

}
function*getPostsById(){

}

function* postSagaAction(){
  yield  takeLatest("GET_POSTS",getPosts)
  yield  takeLatest("GET_POSTS_BY_ID",getPostsById)

}
export default postSagaAction;
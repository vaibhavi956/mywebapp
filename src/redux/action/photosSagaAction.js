import {takeLatest} from "redux-saga/effects";

function * getPhotos(){
    
}

function* photosSagaAction(){
  yield  takeLatest("GET_PHOTOS",getPhotos)
  

}
export default photosSagaAction;
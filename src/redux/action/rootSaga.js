import postSagaAction from "./postSagaAction";
import photosSagaAction from "./photosSagaAction";

import {all} from 'redux-saga/effects'

function* rootSaga(){
   return yield all([postSagaAction(),photosSagaAction()])
}

export default rootSaga;
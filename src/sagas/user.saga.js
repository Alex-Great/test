import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as types from '../constants';
import * as api from '../connectivily/api.user';
// import validateName from '../validation/validateName';
import * as userAction from "../actions";


export function* doSignUpUser(action) {
	try {
		const signUpData = action.payload;
		// singup backend
		const responsebody = yield call(api.signup, signUpData);

		if (responsebody.data === "Add success!") {
			action.payload.history.push('/checkTrelloPage')
		}

	} catch (err) {
		yield put(userAction.errors(err.response.data));
	}
}

export function* watchSignUpRequest() {
	yield takeLatest(types.SIGN_UP_REQUEST, doSignUpUser)
}

export default function* rootSaga() {
	yield all([
		watchSignUpRequest()
	]);
}
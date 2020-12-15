import { call, put, takeLatest } from 'redux-saga/effects';
import * as ProfileActions from '../../actions/profile';
import * as ProfileServices from '../../services/profile';

export function* downloadProfileSaga(): Generator {
  yield takeLatest(ProfileActions.profileLoadRequestAction, profileLoadWorker);
}

export function* profileLoadWorker(): Generator {
  try {
    const user: firebase.default.firestore.DocumentData = yield call(
      ProfileServices.loadProfile
    );
    if (user) {
      yield put(ProfileActions.successProfileLoadAction(user.data()));
    } else {
      yield put(
        ProfileActions.errorProfileLoadAction({
          error: 'Error!',
        })
      );
    }
  } catch (error) {
    yield put(
      ProfileActions.errorProfileLoadAction({
        error: 'Cannot Find user!',
      })
    );
  }
}

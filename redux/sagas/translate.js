import { takeLatest, put } from "redux-saga/effects";

import ActionCreators, { Types } from "../actionCreators";

export function* changeLanguage(action) {
  const { language } = action;
  if (language) {
    try {
      const translate = require(`../../config/translates/${language}.json`);
      console.log(`=== Translate lang from folder: `, translate.language);

      const translationObj = { translate };
      yield put(ActionCreators.translationSuccess(translationObj));
    } catch (err) {
      yield put(
        ActionCreators.translationFailure("Error to change language: ", err)
      );
    }
  } else {
    yield put(
      ActionCreators.translationFailure("There's no language selected.")
    );
  }
}

export default function* translateWatcher() {
  yield takeLatest(Types.TRANSLATION_REQUEST, changeLanguage);
}

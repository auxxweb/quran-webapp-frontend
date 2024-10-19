import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import judgeReducer from "./features/judgeSlice";

const judgePersistConfig = {
  key: "judge",
  storage: storage,
};

const rootReducer = combineReducers({
  judge: persistReducer(judgePersistConfig, judgeReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

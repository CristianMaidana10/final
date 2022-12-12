import { combineReducers, compose  } from "@reduxjs/toolkit";


// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import thunk from "redux-thunk";
import personajesReducer from "../reducers/personajes.reducer";
import episodiosReducer from "../reducers/episodios.reducer";
import favoritosReducer from "../reducers/favoritos.reducer";

const rootReducer = combineReducers({
    characters: personajesReducer,
    episodes: episodiosReducer,
    favorites: favoritosReducer
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

declare global {
    interface Window {
        _REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk)) // Aqui aplicaremos los middlewares
);

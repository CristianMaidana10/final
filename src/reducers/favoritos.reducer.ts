import { FavoriteActions } from "../actions/favoritos.actions";
import Personaje from "../types/personaje.types";
import { Reducer } from "@reduxjs/toolkit";

interface FavoritosState {
    favoritosMapa: Map<number, Personaje>;
};

const initialState: FavoritosState = {
    favoritosMapa: new Map(),
};

const favoritosReducer: Reducer<FavoritosState, FavoriteActions> = (
    state = initialState,
    action
): FavoritosState => {
    switch (action.type) {
        case "TOGGLE_FAVORITO":
            const map = new Map<number, Personaje>();
            state.favoritosMapa.forEach((character) => {
                map.set(character.id, character);
            });
            state.favoritosMapa.has(action.character.id)
                ? map.delete(action.character.id)
                : map.set(action.character.id, action.character);
            return {
                ...state,
                favoritosMapa: map,
            };
        case "REMOVER_TODOS_FAVORITOS":
            return {
                ...initialState,
            };
        default:
            return { ...state };
    }
};
export default favoritosReducer;
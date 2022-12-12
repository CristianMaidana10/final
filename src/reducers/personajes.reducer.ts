import { PersonajeAcciones } from "../actions/personajes.actions";
import Personaje from "../types/personaje.types";           
import InfoPag from "../types/infopag.types";
import { Reducer } from "@reduxjs/toolkit";

interface CharactersState {
    status: "INACTIVO" | "CARGANDO" | "COMPLETO" | "FALLO";
    characters: Personaje[];
    query: string;
    pageInfo: InfoPag;
    error: string | number | null;
}

const initialState: CharactersState = {
    status: "INACTIVO",
    characters: [],
    query: "",
    pageInfo: {count: 0, pages: 0, next: "", prev: ""},
    error: null,
};

/**
 * Personajes reducer
 *
 * @param {State} state
 * @param {DataStore.Reducer<CharactersState, CharacterActions>} action
 *
 * @returns {State}
 */

const personajesReducer: Reducer<CharactersState, PersonajeAcciones> = (
    state = initialState,
    action
): CharactersState => {
    switch (action.type) {
        case "OBTENER_PERSONAJES":
            return {
                ...state,
                status: "CARGANDO",
                characters: [],
                query: action.query,
                error: null,
            };
        case "OBTENER_PERSONAJES_EXITO":
            return {
                ...state,
                status: "COMPLETO",
                characters: action.characters,
                pageInfo: action.pageInfo
            };
        case "OBTENER_PERSONAJES_ERROR":
            return {
                ...state,
                status: "FALLO",
                characters: [],
                error: action.error,
            };
        default:
            return {...state}
    }
};

export default personajesReducer;
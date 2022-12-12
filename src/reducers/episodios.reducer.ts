import { EpisodiosAccion } from "../actions/episodios.actions";
import Episodio from "../types/episodio.types";
import { Reducer } from "@reduxjs/toolkit";

interface EpisodiosState {
    status: "INACTIVO" | "CARGANDO" | "COMPLETADO" | "FALLO";
    episodes: Episodio | Episodio[];
    error: string | null;
};

const initialState: EpisodiosState = {
    status: "INACTIVO",
    episodes: [],
    error: null,
};

/**
 * Episodios reducer
 *
 * @param {State} state
 * @param {DataStore.Reducer<EpisodesState, EpisodesActions>} action
 *
 * @returns {State}
 */
const episodiosReducer: Reducer<EpisodiosState, EpisodiosAccion> = (
    state = initialState,
    action
) : EpisodiosState => {
    switch (action.type) {
        case "OBTENER_EPISODIOS" :
            return {
                ...state,
                status: "CARGANDO",
                episodes: [],
                error: null,
            };
        case "OBTENER_EPISODIOS_EXITO":
            return {
                ...state,
                status: "COMPLETADO",
                episodes: action.episodes,
            };
        case "OBTENER_EPISODIOS_ERROR":
            return {
                ...state,
                status: "FALLO",
                error: action.error,
            };
        default:
            return {...state};
    }
};

export default episodiosReducer;
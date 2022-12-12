import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Episodio from "../types/episodio.types";
import { fetchEpisodios } from "../services/personaje.service";
import { IRootState } from "../store/store";

interface obtenerEpisodioAccion extends Action {
    type: "OBTENER_EPISODIOS";
    query: string;
};

interface obtenerEpisodiosExitoAccion extends Action {
    type: "OBTENER_EPISODIOS_EXITO";
    episodes: Episodio | Episodio[];
};

interface obtenerEpisodiosErrorAccion extends Action {
    type: "OBTENER_EPISODIOS_ERROR";
    error: string;
};

const obtenerEpisodios: ActionCreator<obtenerEpisodioAccion> = (query: string) => {
    return {
        type: "OBTENER_EPISODIOS",
        query: query,
    }
};

const obtenerEpisodiosExito: ActionCreator<obtenerEpisodiosExitoAccion> = (
    episodes: Episodio | Episodio[]
) => {
    return {
        type: "OBTENER_EPISODIOS_EXITO",
        episodes: episodes,
    }
};

const obtenerEpisodiosError: ActionCreator<obtenerEpisodiosErrorAccion> = (
    mensaje: string
) => {
    return {
        type: "OBTENER_EPISODIOS_ERROR",
        error: mensaje,
    }
};

export type EpisodiosAccion =
    | ReturnType<typeof obtenerEpisodios>
    | ReturnType<typeof obtenerEpisodiosExito>
    | ReturnType<typeof obtenerEpisodiosError>;

interface FetchEpisodiosThunkAccion extends ThunkAction<void, IRootState, unknown, EpisodiosAccion> { }

export const obtenerEpisodiosThunk = (arrayEpisodiosID: (string | undefined)[]): FetchEpisodiosThunkAccion => {
    return async (dispatch) => {
        try {
            const respuesta = await fetchEpisodios(arrayEpisodiosID);
            if (respuesta !== undefined) {
                dispatch(obtenerEpisodiosExito(respuesta));
            }
        } catch (e) {
            dispatch(obtenerEpisodiosError(e));
        }
    }
};
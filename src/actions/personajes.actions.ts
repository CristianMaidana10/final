import { obtenerPersonajesAPI, cambiarPagina } from "../services/personaje.service";
import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";
import InfoPag from "../types/infopag.types";
import { IRootState } from "../store/store";

interface obtenerPersonajesAccion extends Action {
    type: "OBTENER_PERSONAJES";
    query: string;
};

interface obtenerPersonajesExitoAccion extends Action {
    type: "OBTENER_PERSONAJES_EXITO";
    characters: Personaje[];
    pageInfo: InfoPag;
};

interface obtenerPersonajesErrorAccion extends Action {
    type: "OBTENER_PERSONAJES_ERROR";
    error: string | number;
};

const obtenerPersonajes: ActionCreator<obtenerPersonajesAccion> = (query: string) => {
    return {
        type: "OBTENER_PERSONAJES",
        query: query,
    }
};

const obtenerPersonajesExito: ActionCreator<obtenerPersonajesExitoAccion> = (
    characters: Personaje[],
    pageInfo: InfoPag
) => {
    return {
        type: "OBTENER_PERSONAJES_EXITO",
        characters: characters,
        pageInfo: pageInfo,
    };
};

const obtenerPersonajesError: ActionCreator<obtenerPersonajesErrorAccion> = (
    mensaje: string | number
) => {
    return {
        type: "OBTENER_PERSONAJES_ERROR",
        error: mensaje,
    }
};


export type PersonajeAcciones =
    | ReturnType<typeof obtenerPersonajes>
    | ReturnType<typeof obtenerPersonajesExito>
    | ReturnType<typeof obtenerPersonajesError>;

interface FetchPersonajesThunkAccion extends ThunkAction<void, IRootState, unknown, PersonajeAcciones> { }

export const fetchPersonajesThunk = (
    query: string
): FetchPersonajesThunkAccion => {
    return async (dispatch) => {
        dispatch(obtenerPersonajes(query));
        try {
            const respuesta = await obtenerPersonajesAPI(query);
            const [characters, info, status] = respuesta;
            if (status === 200) {
                dispatch(obtenerPersonajesExito(characters, info));
            } else {
                dispatch(obtenerPersonajesError(status))
            }
        } catch (e) {
            dispatch(obtenerPersonajesError(e));
        }
    }
};

export const cambiarPaginaThunk = (url: string): FetchPersonajesThunkAccion => {
    return async (dispatch) => {
        try {
            const [characters, info] = await cambiarPagina(url);
            dispatch(obtenerPersonajesExito(characters, info));
        } catch (e) {
            dispatch(obtenerPersonajesError(e));
        }
    }
};
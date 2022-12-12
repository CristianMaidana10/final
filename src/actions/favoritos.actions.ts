import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";

interface FavoritosAccion extends Action {
    type: "TOGGLE_FAVORITO";
    character: Personaje;
};

interface FavoritosRemoverTodosAccion extends Action {
    type: "REMOVER_TODOS_FAVORITOS";
};

export const toggleFavoritos: ActionCreator<FavoritosAccion> = (
    character: Personaje
) => ({
    type: "TOGGLE_FAVORITO",
    character,
});

export const removerTodosFavoritos: ActionCreator<FavoritosRemoverTodosAccion> = () => ({
    type: "REMOVER_TODOS_FAVORITOS",
});

export type FavoriteActions =
    | ReturnType<typeof toggleFavoritos>
    | ReturnType<typeof removerTodosFavoritos>;
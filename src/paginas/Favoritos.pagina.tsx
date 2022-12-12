import { FC } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../store/store";
import { removerTodosFavoritos } from "../actions/favoritos.actions";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns {React.ReactElement} la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {
    const dispatch = useDispatch();
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const favoritosMap = useSelector((state) => state.favorites.favoritosMapa);
    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button className="danger" onClick={() => dispatch(removerTodosFavoritos())}>Eliminar todos</button>
            </div>
            {favoritosMap.size === 0 
                ? (<>No hay favoritos</>) 
                : (<div
                        style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridGap: "20px",
                        justifyItems: "center"
                    }}>
                    {Array.from(favoritosMap.values()).map((character, index) => {
                        return (
                            <div key={character.id}>
                                <TarjetaPersonaje character={character} />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
};

export default PaginaFavoritos
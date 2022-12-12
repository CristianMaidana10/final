import { FC } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import Personaje from '../../types/personaje.types';
import { toggleFavoritos } from '../../actions/favoritos.actions';
import './boton-favorito.css';

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * @param {Personaje} character
 * @returns {React.ReactElement} JSX element 
 */
const BotonFavorito: FC<{ character: Personaje }> = ({ character }) => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const favoritosMap = useSelector((state) => state.favorites.favoritosMapa);
    const dispatch = useDispatch();

    const src = require(favoritosMap.has(character.id) ? "../../assets/star-filled.png" : "../../assets/star.png");

    /**
    * Funcion para actualizar estado favoritos add/remove
    * @param {event} event
    */
    const cambiarFavoritos = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        dispatch(toggleFavoritos(character));
    };
    return (
        <button className="boton-favorito" onClick={cambiarFavoritos} type="button" >
            <img src={src} alt={"favorito"} />
        </button>
    )
};

export default BotonFavorito;
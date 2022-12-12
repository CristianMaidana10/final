import { FC } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import Personaje from '../../types/personaje.types';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @param {Personaje} character
 * @returns {React.ReactElement}un JSX element 
 */
const TarjetaPersonaje: FC<{ character: Personaje }> = ({ character }) => {
    return (
        <div className="tarjeta-personaje">
            <img src={character.image} alt={character.name} />
            <div className="tarjeta-personaje-body">
                <span>{character.name}</span>
                <BotonFavorito character={character} />
            </div>
        </div>
    )
};

export default TarjetaPersonaje;
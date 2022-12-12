import { FC } from 'react';
import Episodio from '../../types/episodio.types';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * @param {{string}} episode
 * @returns {React.ReactElement} un JSX element 
 */
const TarjetaEpisodio: FC<{episode: Episodio}> = ({episode}) => {
    return (
        <div className="tarjeta-episodio">
            <h4>{episode.name}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>Lanzado el: {episode.air_date}</span>
            </div>
        </div>
    )
};

export default TarjetaEpisodio;
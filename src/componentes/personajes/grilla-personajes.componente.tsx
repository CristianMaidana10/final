import { FC, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { fetchPersonajesThunk } from "../../actions/personajes.actions";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns {React.ReactElement}un JSX element
 */
const GrillaPersonajes: FC = () => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const {status, characters} = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPersonajesThunk(""));
    }, [dispatch])
        if(status === "CARGANDO") return <div>Cargando personajes...</div>;
        if(status === "FALLO") return <div>Fallo al cargar los personajes.</div>;
        if(!characters || characters.length === 0) return <></>;
    return (
        <div className="grilla-personajes">
            {characters.map((character) => {
                return (
                    <div key={character.id}>
                        <TarjetaPersonaje character={character}/>
                    </div>
                )
            })}
            
        </div>
    );
};

export default GrillaPersonajes;


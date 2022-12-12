import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { fetchPersonajesThunk } from "../actions/personajes.actions";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns {React.ReactElement}
 */
const PaginaInicio: FC = () => {
    const dispatch = useDispatch();

    // borrar filtros
    const borrarFiltrosOnClick = () => {
        dispatch(fetchPersonajesThunk(""))
    };

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={borrarFiltrosOnClick}>
                Limpiar filtro
            </button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio
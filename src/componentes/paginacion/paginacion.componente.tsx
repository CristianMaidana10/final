import { FC } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { cambiarPaginaThunk } from '../../actions/personajes.actions';
import { IRootState } from '../../store/store';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns {React.ReactElement}un JSX element 
 */
const Paginacion: FC = () => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const dispatch = useDispatch();
    const pageInfo = useSelector((state) => state.characters.pageInfo);
    const {next, prev} = pageInfo;

    const paginaAnterior = () => {
        dispatch(cambiarPaginaThunk(prev))
    };

    const paginaSiguiente = () => {
        dispatch(cambiarPaginaThunk(next))
    };

    return (
        <div className="paginacion">
            <button onClick={paginaAnterior} disabled={prev === null ? true : false}className={"primary"}>Anterior</button>
            <button onClick={paginaSiguiente} disabled={prev === null ? true : false}className={"primary"}>Siguiente</button>
        </div>
    )
};

export default Paginacion;
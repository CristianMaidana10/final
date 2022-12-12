import { FC, ChangeEvent} from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { fetchPersonajesThunk } from '../../actions/personajes.actions';
import { IRootState } from '../../store/store';
import './filtros.css';

/**
 * 
 *
 * @returns {React.ReactElement} JSX element
 */

const Filtros: FC = () => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const query = useSelector((state) => state.characters.query);
    const dispatch = useDispatch();

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
        let query = e.target.value;
        dispatch(fetchPersonajesThunk(query))
    };

    return <div className="filtros">
        <label htmlFor="filtro">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        onChange={onChange}
        value={query}
        autoFocus={true}
        />
    </div>
};

export default Filtros;
import Personaje from "../types/personaje.types";
import InfoPag from "../types/infopag.types";
import Episodio from "../types/episodio.types";

/**
 * Funcion q retorna todos los personajes por pagina / filtrar x nombres
 *
 * @param {string | undefined} name
 * @returns {Promise<[Personaje[], InfoPag, number] | [any, any, number]>} 
 */
export const obtenerPersonajesAPI = async (
    name?: string
): Promise<[Personaje[], InfoPag, number] | [any, any, number]> => {
    let nameParam = "";
    if (name !== "" && name !== undefined) {
        nameParam = `name=${name}`;
    }
    return fetch(`https://rickandmortyapi.com/api/character?${nameParam}`).then(
        function (respuesta) {
            return respuesta
                .json()
                .then((data) => [data.results, data.info, respuesta.status])
        }
    )
};

/**
 *  Funcion q retorna los personajes x pag
 *
 * @param {string }url
 * @returns {Promise<[Character[], PageInfo]>} 
 */
export const cambiarPagina = async (
    url: string
): Promise<[Personaje[], InfoPag]> => {
    return fetch(url)
        .then((data) => data.json())
        .then((data) => [data.results, data.info])
};

/**
 * Funcion q retorna todos los episodios del personaje
 *
 * @param {Array<number>} episodioArrayID
 * @returns {Promise<Episode | Episode[]>} 
 */
export const fetchEpisodios = async (
    episodioArrayID: (string | undefined)[]
): Promise<Episodio | Episodio[]> => {
    return (
        await fetch(`https://rickandmortyapi.com/api/episode/${episodioArrayID}`)
    ).json();
};
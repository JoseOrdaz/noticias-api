import { useState, createContext, useEffect } from "react";
import axios from "axios";

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0)

   

    useEffect(() => {
        const consultarAPI = async () => {
            const url =`https://saurav.tech/NewsAPI/top-headlines/category/${categoria}/us.json`

            const { data } = await axios(url);
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1)
        }
        consultarAPI()
    }, [categoria]) 


    useEffect(() => {
        const consultarAPI = async () => {
            const url =`https://saurav.tech/NewsAPI/top-headlines/category/${categoria}/us.json`

            const { data } = await axios(url);
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        consultarAPI()
    }, [pagina]) 



    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }



    return (
        <NoticiasContext.Provider
        value={{
            categoria,
            handleChangeCategoria,
            handleChangePagina,
            noticias,
            totalNoticias,
            pagina
        }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {NoticiasProvider} 


export default NoticiasContext;
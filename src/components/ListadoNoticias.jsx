import { Container, Grid, Typography } from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {

  const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()

  const totalPaginas = parseInt(totalNoticias / 20)

  return (
    <>
    <Typography align='center' marginY={5} component="h2" variant="h4">
            Últimas noticias
          </Typography>

          <Grid
            container
            spacing={2}
          >
            {noticias.map(noticia => (
              <Noticia
                key={noticia.url}
                noticia={noticia}
              ></Noticia>
            ))}
          </Grid>

          <Stack sx={{marginY:5}}spacing={2} direction={"row"} justifyContent={"center"} alignItems={"center"}>
           
            <Pagination page={pagina} count={totalPaginas} onChange={handleChangePagina} color="primary" />
        
          </Stack>
    </>
  )
}

export default ListadoNoticias
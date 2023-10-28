
import { Container, Grid, Typography } from '@mui/material'
import Formulario from './components/Formulario'
import { NoticiasProvider } from './context/NoticiasProvider'
import ListadoNoticias from './components/ListadoNoticias'


function App() {

  return (
    <NoticiasProvider>
      
      <Container>
        <header>
          <Typography align='center' marginY={15} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>
        
        </header>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <Grid item  xs={12} md={8} lg={6}>
          <Formulario></Formulario>
          </Grid>
          
        </Grid>

        <ListadoNoticias></ListadoNoticias>
       
      </Container>
      </NoticiasProvider>
  )
}

export default App

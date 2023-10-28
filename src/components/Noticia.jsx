import {Card, CardActions, CardContent, CardMedia, Link, Typography, Grid} from "@mui/material"


const Noticia = ({noticia}) => {
    const {urlToImage, url, title, description, source} = noticia
  return (
    <Grid item md={4} lg={4}>
    <Card>
        {urlToImage && 
        
        <CardMedia
            component="img"
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
            height={250}
        ></CardMedia>}
        <CardContent>
            <Typography variant="body1" color="error">
                {source.name}
            </Typography>
            <Typography variant="h5"component="div">
                {title}
            </Typography>
            <Typography variant="body2" >
                {description}
            </Typography>

            <CardActions>
                <Link
                 target="_blank"
                 href={url}
                 variant="button"
                 width={"100%"}
                 textAlign="center"
                 sx={{textDecoration:'none'}}
                >
                Leer noticia</Link>
            </CardActions>            
        </CardContent>
    </Card>
    </Grid>
  )
}

export default Noticia
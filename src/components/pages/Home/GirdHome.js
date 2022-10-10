import React from 'react'
// Material UI
import {Grid,Box} from '@mui/material'
// Show All Items from ItemListContainer
import { ItemListContainer } from '../../ItemListContainer/ItemListContainer'
// Show news (NewsListContainer,NewsList,News)
import { NewsListContainer } from './NewsListContainer'

export const GirdHome = () => {
  return (
    <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Box>
              <ItemListContainer/>
            </Box>
          </Grid>        
          <Grid item xs={12} sm={12} md={6} style={{background:'black'}}>
            <Box p={2} m={5}>
            <NewsListContainer></NewsListContainer>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{background:'black'}}>
            <Box p={2} m={5}>
              <h2 style={{color:'white'}}>Nuevo trailer de ChainsawMan</h2>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/OatDU-PgJQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{color:'white'}}> Chainsaw Man de Tatsuki Fujimoto… El gran éxito de la Shonen Jump, ganando una base de fanáticos dedicados con su trama intrigante, personajes identificables y ultraviolencia fantástica . Era solo cuestión de tiempo antes de que obtuviera una adaptación al anime, y cuando se anunció que  MAPPA estaba detrás, los fanáticos se volvieron locos. El primer trailer lanzado en junio conmociono a las redes sociales y por fin luego de tanta espera tenemos un nuevo vistazo y más información</p>
            </Box>
          </Grid>
        </Grid>
    </div>
  )
}

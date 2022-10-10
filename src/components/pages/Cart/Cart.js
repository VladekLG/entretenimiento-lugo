import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import './Cart.css'
//MUI Themes
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


export const Cart = ({item}) => {
    const {deleteProduct} = useContext(CartContext)

    const theme = createTheme({
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: '#4b04ffab',
        },
      },     
    });
    
  return (
    <>
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">

          <TableHead className='thead'>
            <TableRow>
              <TableCell align="center" colSpan={5} className='table-cell' >
                Detalles
              </TableCell>
              <TableCell align="right"  className='table-cell'>
                Precio
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='left' className='table-cell'>Imagen</TableCell>
              <TableCell align="left" className='table-cell'>Producto</TableCell>
              <TableCell align="center" className='table-cell'>Cantidad</TableCell>
              <TableCell align="right" className='table-cell'>Precio x Unidad</TableCell>
              <TableCell align="right" className='table-cell'>Precio Total</TableCell>
              <TableCell align="right" className='table-cell'>Remover Prod</TableCell>
            </TableRow>
          </TableHead>

          <TableBody className='tbody'>  
              <TableRow>
                <TableCell align='center'><img src={item.imagen} alt="imagen" className='tdImagen'/></TableCell>
                <TableCell align="left" className='table-cell-body'>{item.nombre}</TableCell>
                <TableCell align="center" className='table-cell-body' >{item.quantity}</TableCell>
                <TableCell align="right" className='table-cell-body'>${item.precio}</TableCell>
                <TableCell align="right" className='table-cell-body'>${item.precio*item.quantity}</TableCell>
                <TableCell align='right'><Button variant="contained" color='secondary' onClick={()=>deleteProduct(item.id)}>X</Button></TableCell>
              </TableRow>
          </TableBody>
              
        </Table>
      </TableContainer>
      </ThemeProvider>
    </>
  );
}

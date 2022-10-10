import React from 'react'
import './Form.css'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'





export const Formulario = () => {


	let navigate = useNavigate();





	const {productCartList,getTotalPrice,clearCartAfterBuy} = useContext(CartContext)

  return (
         <>
		 <Formik
			initialValues={{
				nombre:'',
				correo:'',
				telefono:'',
				pais:'Argentina',
				texto:'',
			}}
			validate={(valores)=>{
				let errores = {}
				// Validacion para nombre
				if(!valores.nombre){
					errores.nombre = 'Por favor ingresa un nombre'
				}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
					errores.nombre = 'El nombre solo puede contener letras y espacios'
				}
				// Validacion para correo
				if(!valores.correo){
					errores.correo = 'Por favor ingresa un correo electronico'
				}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
					errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
				}
				// Validaciones para telefono
				if(!valores.telefono){
					errores.telefono = 'Por favor ingresa un numero de telefono/celular'
				}
				// Validaciones para select
				if(!valores.pais){
					errores.pais= 'Por favor selecciona un Pais'
				}
				return errores;			
			}}
			onSubmit={(valores)=>{
				const order = {
					buyer: {
					  name: valores.nombre,
					  email: valores.correo,
					  phone: valores.telefono,
					  country: valores.pais,
					  text: valores.texto,
					},
					items: productCartList.map(product => ({id:product.id, title:product.nombre,imagen:product.imagen, price:product.precio, quantity:product.quantity})),
					total: getTotalPrice(),
				  };
				console.log(valores)
				console.log('Formulario enviado')
				Swal.fire({
					title:'Alerta',
					icon: 'question',
					text:'Desea confirmar la compra?',
					showDenyButton: true,
					denyButtonText:'No',
					confirmButtonText:'Si',
					confirmButtonColor: '#000000',
				  }).then(response=>{
					if(response.isConfirmed){
					  Swal.fire('¡Su compra ha sido Exitosa!','En breve le mandaremos un mail con su orden de compra', 'success');     
						const db = getFirestore();
						const ordersCollection = collection(db,'orders');
						addDoc(ordersCollection, order )
						clearCartAfterBuy()
						return navigate ("/")
						.then(({id})=> console.log(id))
					}else if(response.isDenied){
					  Swal.fire('Informacion','No paso nada', 'info');
					}else{
					  Swal.fire('Error', 'Ocurrio algo inesperado', 'error');
					}
				  })
			}}
		 >
			{({errors})=>(
				<Form className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<Field
						type="text" 
						id="nombre"
						name="nombre" 
						placeholder="Usuario"
					/>
					<ErrorMessage name="nombre" component={()=>(
						<div className='error'>{errors.nombre}</div>
					)}/>
				</div>
				<div>
					<label htmlFor="correo">Correo</label>
					<Field
						type="text" 
						id="correo"
						name="correo" 
						placeholder="correo@correo.com" 
					/>
					<ErrorMessage name="correo" component={()=>(
						<div className='error'>{errors.correo}</div>
					)}/>
				</div>

				<div>
					<label htmlFor="telefono">Numero de Telefono/Celular</label>
					<Field
						type="text" 
						id="telefono"
						name="telefono" 
						placeholder="Tu numero de telefono" 
					/>
					<ErrorMessage name="telefono" component={()=>(
						<div className='error'>{errors.telefono}</div>
					)}/>
				</div>

				<div style={{color:'black'}}>
					<Field name="pais" as="select">
						<option value="Argentina" key="Argentina">Argentina</option>
						<option value="Chile" key="Chile">Chile</option>
						<option value="Peru" key="Peru">Peru</option>
						<option value="Uruguay" key="Uruguay">Uruguay</option>
					</Field>
					<ErrorMessage name="pais" component={()=>(
						<div className='error'>{errors.pais}</div>
					)}/>
				</div>

				<div>
					<label>
						<Field type="radio" name="sexo" value="hombre"/>Hombre
					</label>
					<label>
						<Field type="radio" name="sexo" value="mujer"/>Mujer
					</label>
				</div>

				<div>
					<Field name="texto" as="textarea" placeholder="Mensaje"/>
				</div>

				<button type='submit'>Emitir Compra</button>  
				</Form>
			)}
		 </Formik>
		</>
  )
}

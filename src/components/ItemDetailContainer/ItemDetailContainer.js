import React,{useEffect,useState} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { Loading } from './loading'
import { obtenerItemDetail } from '../../data/arrayItems'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
  // UseState
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  // Primer UseEffect--> Llamado a APIS / Manejo de async
  useEffect(() => {
    const getData = async () => {
      try {
        const peticion = await obtenerItemDetail();
        setItem(peticion.find((item) => item.id == id));
        setLoading(false);
      } catch (error) {
        console.log("Hubo un error");
      }
    };
    getData();
  }, [id]);

  console.log(item);
  
  return (
    <div>
      {loading ? (<Loading></Loading>) 
               : (<div><ItemDetail item={item} /></div>)}
    </div>
  );
};

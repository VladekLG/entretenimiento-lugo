import React,{useEffect,useState} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { Loading } from './loading'
import { useParams } from 'react-router-dom'
import {doc,getDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'


export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  // const [loading, setLoading] = useState(true);
  useEffect(() => {

    const queryRef = doc(db,"items",id)
    getDoc(queryRef).then(res=>{
        const newDoc ={
          ...res.data(),
          id:res.id
        }
        console.log('newdoc',newDoc)
        setItem(newDoc)
    }).catch(error=>console.log(error))

    

    // const getData = async () => {
    //   try {
    //     const peticion = await obtenerItemDetail();
    //     setItem(peticion.find((item) => item.id === parseInt(id)));
    //     setLoading(false);
    //   } catch (error) {
    //     console.log("Hubo un error");
    //   }
    // };
    // getData();
  },[id]);


  
  return (
    <div>

<div style={{display:'flex', justifyContent:'center'}}><ItemDetail item={item} /></div>
      {/* {loading ? (<Loading></Loading>) 
               : (<div style={{display:'flex', justifyContent:'center'}}><ItemDetail item={item} /></div>)} */}
    </div>
  );
};

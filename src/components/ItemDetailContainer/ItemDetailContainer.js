import React,{useEffect,useState} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { Loading } from './loading'

export const ItemDetailContainer = () => {


// UseState

const [item,setItem] = useState([])
const [loading,setLoading] = useState(true)

// Primer UseEffect--> Llamado a APIS / Manejo de async
  useEffect(()=>{

    
    const getData = async () => {
      try {
        const peticion = await fetch(
          "https://mmo-games.p.rapidapi.com/games",
          {
            method: "GET",
            headers: {
              platform: "browser",
              "X-RapidAPI-Key":
                "c0d57ca6a7msh28e6583fb9d629ap1b06a0jsnf8963e89f028",
              "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
            },
          }
        );
        const response = await peticion.json();
        setItem(response.find((item) => item.id === 1113));
        setLoading(false)
      } catch (error) {
        console.log("Hubo un error al cargar los datos");
      }
    };

  // Promesa
    const obtenerPromesa = ()=>{
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(getData())
        }, 2000);
      })
    }
    obtenerPromesa();

  },[])


console.log(item)


  return (
    <div>{

        loading? <div>
          <br/> <br/>
        <Loading/>
        </div>
        :<div style={{marginTop:'10rem'}}>
          <ItemDetail item={item} precio={900} stock={10} initial={0}  ></ItemDetail>
        </div>
      }
        
    </div>
  )
}

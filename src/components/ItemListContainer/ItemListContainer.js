import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList"; 
import { obtenerItems } from "../../data/arrayItems";
import { Carousel3D } from "../Carousel3D";
import { useParams } from "react-router-dom";

// 1)Importar ArrayItems 
// 2) Dentro de ItemList creo Los list (cardsList), dentro crear una coleccion de objetos(cards)
// 3) Cuando trabajemos con procesos asincronos o llamados a APIS debemos utilizar USE EFFECT.
// 4)Aqui va la promesa, obtenemos los parametros, la guardamos en variable, y esa variable la pasamos como propiedad al componente itemlist

export const ItemListContainer = ({greeting}) => {
  console.log(useParams())
  const {categoryType} = useParams()
  const [items,setItems]  = useState([])
  // Creacion de Promesa para simular API
 // UseEffect Para el renderizado (Aqui va la funcion asincrona)

useEffect(()=>{

  const functionAsync = async () => {
    try {
      const listaItems = await obtenerItems();
      if (!categoryType) {
        setItems(listaItems);
      } else if (categoryType === "Accion") {
        const listaAccion = listaItems.filter(
          (itemaccion) => itemaccion.genero === categoryType
        );
        setItems(listaAccion);
      } else {
        const nuevaLista = listaItems.filter(
          (item) => item.categoria === categoryType
        );
        setItems(nuevaLista);
      }
    } catch (error) {
      console.log("hubo error");
    }
  };

  functionAsync();

},[categoryType])
  return (
    <div style={{background:'black'}}>
      {/* Mostrar en un componente de Inicio el h2 y el carousel, componetizar y guardarlo en Pages */}
      <h2 className="titleIndex">Bienvenido a nuestro catalogo de venta de Videojuegos, Mangas, accesorios  y enterate de todas las novedades de nuestra tienda | Noticias/News | Galeria de Arte </h2>  
      <Carousel3D>
      <span><img src="http://cdn.shopify.com/s/files/1/0634/3616/1281/products/modoberserk.jpg?v=1660395362" alt="Innocent"/></span>
      <span><img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/161/products/jojos-bizarre-adventure-part-v-5-cinco-vento-aureo-vol-04-ivrea-manga-japones-viducomics-comic-hirohiko-araki1-706be21d2a2769644e16473724563408-640-0.jpg" alt=""/></span>
      <span><img src="https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/45146/9786075285740.jpg" alt=""/></span>
      <span><img src="https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/45154/9789878190266.jpg?size=4&h=610" alt=""/></span>
      <span><img src="https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/n/innocent-1.jpg" alt=""/></span>
      <span><img src="https://cdn.mos.cms.futurecdn.net/GeKEcVSB4Rrq3maSJZRosg.jpg" alt=""/></span>
      <span><img src="https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/42214/100000150301.jpg" alt=""/></span>
      <span><img src="https://img1.ak.crunchyroll.com/i/spire4/07157ee97e17e71cec48c0b2e79e13be1658525346_main.jpg" alt=""/></span>
      </Carousel3D>
      <ItemList items={items}/>
   </div>
  );
};

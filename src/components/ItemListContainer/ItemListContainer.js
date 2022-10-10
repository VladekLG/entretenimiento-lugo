import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList"; 
import { Paginations } from "./Pagination";
import { useParams } from "react-router-dom";
import {getDocs, collection,query, where} from 'firebase/firestore'
import { db } from "../../utils/firebase";
import 'animate.css';
import { Link } from "react-router-dom";
export const ItemListContainer = () => {
  console.log(useParams())
  const {categoryType} = useParams()
  const [items,setItems]  = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8)


useEffect(()=>{


  setTimeout(() => {
    
  }, 3000);
 const getData = async () => {
   try {
     let queryRef = "";
     if (!categoryType) {
       queryRef = collection(db, "items");
     } else if (categoryType === "Accion") {
      queryRef = query(collection(db, "items"),where("genero", "==", "Accion"),where("categoria", "==", "gaming"));
     }else if (categoryType === "Terror"){
      queryRef = query(collection(db, "items"),where("genero", "==", "Terror"),where("categoria", "==", "gaming"));
     }else if (categoryType === "Souls"){
      queryRef = query(collection(db, "items"),where("genero", "==", "Souls"),where("categoria", "==", "gaming"));
     }else if (categoryType === "MangasAccion"){
      queryRef = query(collection(db, "items"),where("genero", "==", "Accion"),where("categoria", "==", "mangas"));
     }
      else {
       // Para filtrar la coleccion por categorias 2 parametros, el primero coleccion segundo es el nombre
       queryRef = query(collection(db, "items"),where("categoria", "==", categoryType));
     }
     const response = await getDocs(queryRef);
     const docs = response.docs;
     const data = docs.map((doc) => {
       const newDoc = {
         ...doc.data(),
         id: doc.id,
       };
       return newDoc;
     });
     setItems(data);
   } catch (error) {
     console.log(error);
   }
 };
 getData();
},[categoryType])

const lastPostIndex = currentPage* postPerPage;
const firstPostIndex = lastPostIndex - postPerPage
const currentPosts = items.slice(firstPostIndex,lastPostIndex)

console.log('itemss', items)
  return (
    <div style={{background:'black'}}>

      <h1 className="ProductsTitle animate__animated animate__fadeInTopLeft">Productos {categoryType}</h1>
     {categoryType === "gaming"?   <h2><Link as={Link} to="/category/Accion">Accion</Link> | <Link as={Link} to="/category/Terror">Terror</Link> |<Link as={Link} to="/category/Souls">SoulsLike</Link> </h2>
      : null
      }
     {categoryType === "mangas"? <h2><Link as={Link} to="/category/MangasAccion">Accion</Link></h2>
      : null
      }
      <ItemList items={currentPosts}/>  
      <Paginations totalPosts = {items.length} postsPerPage = {postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
};

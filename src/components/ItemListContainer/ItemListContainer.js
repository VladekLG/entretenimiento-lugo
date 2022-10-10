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
  const {genreType} = useParams()
  const [items,setItems]  = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8)


useEffect(()=>{
 const getData = async () => {
   try {
     let queryRef = "";
     if (!categoryType ) {
       queryRef = collection(db, "items");
     }else if (genreType === "Accion" && categoryType === "mangas"){
      queryRef = query(collection(db, "items"),where("genero", "==", genreType), where("categoria", "==", categoryType));
     }else if (genreType === "Accion" && categoryType === "gaming"){
      queryRef = query(collection(db, "items"),where("genero", "==", genreType), where("categoria", "==", categoryType));
     }
      else {
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
},[categoryType,genreType])

const lastPostIndex = currentPage* postPerPage;
const firstPostIndex = lastPostIndex - postPerPage
const currentPosts = items.slice(firstPostIndex,lastPostIndex)

console.log('itemss', items)
  return (
    <div style={{background:'black'}}>
      <h1 className="ProductsTitle animate__animated animate__fadeInTopLeft">Productos {categoryType}</h1>
      {categoryType === "mangas"? <h2><Link as={Link} to="/category/mangas/Accion">Accion</Link></h2>
       : null
       }
      {categoryType === "gaming"? <h2><Link as={Link} to="/category/gaming/Accion">Accion</Link></h2>
       : null
       }
      <ItemList items={currentPosts}/>  
      <Paginations totalPosts = {items.length} postsPerPage = {postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
};

import {React,useEffect,useState} from 'react'
import { NewsList } from './NewsList'
import {getDocs, collection,query,where,limit} from 'firebase/firestore'
import { db } from '../../../utils/firebase'
import './NewsListContainer.css'



export const NewsListContainer = () => {

  const [itemsNews,setItemsNews]  = useState([])
  
  useEffect(()=>{

    const getDataItems = async ()=>{
      try {
        let queryRef = "";
        queryRef = query(
        collection(db, "items"),
        //  where("precio", ">", 1000 ),
         where("news", "==", true),
        );
        const response = await getDocs(queryRef);
        const docs = response.docs;
        const data = docs.map((doc) => {
          const newDoc = {
            ...doc.data(),
            id: doc.id,
          };
          return newDoc;
        });
        setItemsNews(data);


      } catch (error) {
        console.log(error);
      }

    }


    getDataItems();


  },[])






  console.log('items News', itemsNews)

  return (
    <div>
        <h1 className='titleNews'>Novedades!</h1>
        <NewsList newsItems={itemsNews}></NewsList>
    </div>
  )
}

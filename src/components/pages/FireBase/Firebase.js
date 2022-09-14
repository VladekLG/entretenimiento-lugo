import React, { useEffect } from 'react'
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../../../utils/firebase'

export const Firebase = () => {

    useEffect(()=>{

        const getData = async ()=>{
            // Consulta o referencia
            const query = collection(db,"items")
            const response = await getDocs(query)
            const docs = response.docs;
            // console.log('doc info', docs[0].data())
            // console.log('doc info', docs[0].id)
            const data = docs.map(doc => {return {...doc.data(), id:doc.id}})
            console.log(data)
        }
        getData()
    },[])

  return (
    <div>Firebase</div>
  )
}

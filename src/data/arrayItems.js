// ItemImages
import demonSlayerVol1 from "../assets/img/itemImages/DemonSlayerVol1.jpg"
import hellsingVol1 from "../assets/img/itemImages/HellsingVol1.jpg"
import soloLevelingVol1 from "../assets/img/itemImages/SoloLevelingVol1.jpg"
import spyFamilyVol1 from "../assets/img/itemImages/SpyVol1.jpg"

export const arrayItems = [

    {   id:1,
        imagen: demonSlayerVol1,
        nombre:'DemonSlayer 1',
        autor:'Koyoharu Gotouge',
        precio:749,
        stock:15,
        initial:0,
    },
    
    {   id:2,
        imagen:hellsingVol1,
        nombre:'Hellsing 1',
        autor:'Kota Hirano',
        precio:849,
        stock:25,
        initial:0,
    },
    {   id:3,
        imagen:soloLevelingVol1,
        nombre:'Solo Leveling 1',
        autor:'Chu-Gong',
        precio:2950,
        stock:30,
        initial:0,
    },

    {   id:4,
        imagen:spyFamilyVol1,
        nombre:'Spy x Family VOL1',
        autor:'Tatsuya Endo',
        precio: 749,
        stock:30,
        initial:0,
    },
]

// Exporto la promesa

export const obtenerItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayItems);
      }, 2000);
    });
  };

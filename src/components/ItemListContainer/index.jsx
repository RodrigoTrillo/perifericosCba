import React, {useEffect, useState} from "react";  
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const prod = [
    {
        "id":1,
        "name":"Auricular Turtle Beach Recon 70 Blanco",
        "description":"",
        "precio":"7500",
        "img":"https://gorilagames.com/img/public/turtle-beach-70p-white-3f7178.jpg",
        "category":"auris"
    },
    {
        "id":2,
        "name":"Auricular Redragon Zeus X H510 RGB",
        "description":"",
        "precio":"14990",
        "img":"https://gorilagames.com/img/Public/1019-producto-auricular-zeus-x-h510-rgb-1-3411.jpg",
        "category":"auris"
    },
    {
        "id":3,
        "name":"Auricular Redragon Pandora White H350 RGB 7.1",
        "description":"",
        "precio":"8990",
        "img":"https://gorilagames.com/img/Public/1019-producto-redragon-pandora-white-1-6559.jpg",
        "category":"auris"
    },
    {
        "id":4,
        "name":"Auricular Redragon Hylas Pink H260 RGB",
        "description":"",
        "precio":"4890",
        "img":"https://gorilagames.com/img/Public/1019-producto-redragon-hylas-pink-1-3281.jpg",
        "category":"auris"
    },
    {
        "id":5,
        "name":"Auricular Logitech Pro X Gaming LOL Edition",
        "description":"",
        "precio":"27990",
        "img":"https://gorilagames.com/img/Public/1019-producto-1058-producto-81f6d6021f6640caeb888eea77346451-hi-4218-2177.jpg",
        "category":"auris"
    },
    {
        "id":6,
        "name":"Auricular Logitech G733 Lightsync Blue Wireless",
        "description":"",
        "precio":"28990",
        "img":"https://gorilagames.com/img/Public/1019-producto-auricular-logitech-g733-blue-3-2301.jpg",
        "category":"auris"
    },
    {
        "id":7,
        "name":"Auricular Astro A50 Black Wireless + Base PS4",
        "description":"",
        "precio":"50990",
        "img":"https://gorilagames.com/img/Public/1019-producto-auricular-astro-a50-1-3643.jpg",
        "category":"auris",
    },
    {
        "id":8,
        "name":"Teclado Trust GXT 835 Azor RGB US",
        "description":"",
        "precio":"4290",
        "img":"https://gorilagames.com/img/Public/1019-producto-teclado-trust-gtx-835-azor-ingles-1-8938.jpg",
        "category":"teclado",
    },
    {
        "id":9,
        "name":"Teclado T-Dagger Naxos Rainbow TGK310-RD Switch Red",
        "description":"",
        "precio":"5490",
        "img":"https://gorilagames.com/img/Public/1019-producto-teclado-t-dagger-naxos-1-8344.jpg",
        "category":"teclado",
    },
    {
        "id":10,
        "name":"Teclado Redragon Yama Black K550 RGB",
        "description":"",
        "precio":"13990",
        "img":"https://gorilagames.com/img/Public/1019-producto-redragon-yama-negro-8622.jpg",
        "category":"teclado",
    },
    {
        "id":11,
        "name":"Teclado Logitech G915 TKL Wireless",
        "description":"",
        "precio":"33990",
        "img":"https://gorilagames.com/img/Public/1019-producto-teclado-logitech-g915-tkl-1-8057.jpg",
        "category":"teclado",
    },
]

const ItemListContainer =({texto})=>{
    const [data , setData] = useState([]);
    const {categoriaId} = useParams();
    useEffect(()=>{
        const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(prod)
            }, 1000);
        });
        if(categoriaId){
            getData.then(res =>setData(res.filter(prod => prod.category === categoriaId)));
        }else{
            getData.then(res =>setData(res))
        }


    }, [categoriaId])

    
    return(
        <>
        <div className="card-cont">
        <ItemList data ={data}/>
        </div>
        </>
    )
}

export default ItemListContainer;
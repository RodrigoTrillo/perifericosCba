import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";



const prod = [
    {
        "id":1,
        "name":"Auricular Turtle Beach Recon 70 Blanco",
        "description":"",
        "precio":"7500",
        "img":"https://gorilagames.com/img/public/turtle-beach-70p-white-3f7178.jpg"
    },
    {
        "id":2,
        "name":"Auricular Redragon Zeus X H510 RGB",
        "description":"",
        "precio":"14990",
        "img":"https://gorilagames.com/img/Public/1019-producto-auricular-zeus-x-h510-rgb-1-3411.jpg"
    },
    {
        "id":3,
        "name":"Auricular Redragon Pandora White H350 RGB 7.1",
        "description":"",
        "precio":"8990",
        "img":"https://gorilagames.com/img/Public/1019-producto-redragon-pandora-white-1-6559.jpg"
    },
    {
        "id":4,
        "name":"Auricular Redragon Hylas Pink H260 RGB",
        "description":"",
        "precio":"4890",
        "img":"https://gorilagames.com/img/Public/1019-producto-redragon-hylas-pink-1-3281.jpg"
    },
    {
        "id":5,
        "name":"Auricular Logitech Pro X Gaming LOL Edition",
        "description":"",
        "precio":"27990",
        "img":"https://gorilagames.com/img/Public/1019-producto-1058-producto-81f6d6021f6640caeb888eea77346451-hi-4218-2177.jpg"
    },
    {
        "id":6,
        "name":"Auricular Logitech G733 Lightsync Blue Wireless",
        "description":"",
        "precio":"28990",
        "img":"https://gorilagames.com/img/Public/1019-producto-auricular-logitech-g733-blue-3-2301.jpg"
    },
    {
        "id":7,
        "name":"Auricular Astro A50 Black Wireless + Base PS4",
        "description":"",
        "precio":"50990",
        "img":"https://gorilagames.com/img/Public/1019-producto-auricular-astro-a50-1-3643.jpg"
    }
]


const ItemDetailContainer = ()=>{
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(()=>{
        const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(prod)
            }, 1000);
        });
        getData.then(res =>setData(res.find(prod => prod.id === parseInt(detalleId))));


    }, [detalleId])

    return(
        <>
        <ItemDetail data = {data}/>
        </>
    );
}

export default ItemDetailContainer;
import React from "react"; 
import "./ItemDetail.css"
import ItemCount from "../ItemCount"; 

const ItemDetail =({data})=>{
    const onAdd =(quantity)=>{
        console.log(`Compraste ${quantity} unidades`)}
    return(
        <>
        <div className="container">
            <div className="detail">
            <img className="detail__img" src={data.img} alt=""/>
            <div className="content">
                <h1>{data.name}</h1>
                <h2>Una experiencia sonora diferente.</h2>
                <h3>Los pruebas, te los quedas.</h3>
                <p>si a las Suaves y acolchadas copas , le sumas la precisión de audio estéreo, no querrás quitártelos nunca. Los controladores direccionales de neodimio ofrecen una nitidez de sonido única, que se complementa perfectamente con su avanzado aislamiento de ruido pasivo. Prepárate para escuchar cada detalle: el fuego enemigo, los pasos de tu oponente, ¡todo lo que necesitas para ganar!
                Lleva el color a todas partes.

                El Hylas es un auricular super completo: viene equipado con retroiluminación RGB y control de volumen integrado. Podrás conectarlos a tu Xbox One, Nintendo Switch, PlayStation, PS4, PS5, MAC, PC o portátil. Disfruta de una gran calidad de sonido y comparte toda su belleza donde quieras, y cuando quieras.</p>
                <h5>Sólo te oirán a tí.</h5>
                <p>Un auricular 100% optimizado para que tu voz sea siempre la protagonista: cuenta con micrófono omnidireccional, fijo y flexible, con tecnología de cancelación de ruido y eco.</p>
                <div className="itemPrice">
                    <p>$ {data.precio}</p>
                </div>
                <div className="count-cont">
                    <ItemCount initial ={1} stock={5} onAdd={onAdd}/>
                </div>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default ItemDetail;
import Item from '../Item'
import React from 'react'  
import products from '../../items.json'

const ItemList = ({data = []}) =>{
    return(  
        
        data.map(products => <Item key={products.id} info={products} />)
        
    );
}

export default ItemList;
import React from "react";

import '../collection-item/collectionItem.styles.scss'


export const CollectionItem = ({imageUrl, price, name}) => (
    <div className="collection-item">
        <div className="image"
        style = {{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)
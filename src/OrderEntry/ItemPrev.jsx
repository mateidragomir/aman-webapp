import React from "react";

function ItemPrev( data ) {
    const { exists, code, vendorExists, vendorContact, haggle, discount } = data;
    
    return(
        <div className="item-prev">
            {exists ? 
            <div className="horzontal-left">
                <div className="vertical-center">
                    <h1>item Code: {code}</h1>
                    <h2>Recomended discount: {discount}</h2>
                    {vendorExists ? 
                    <h2>Contact vendor: {vendorContact}</h2>
                    : <h2>No vendor information</h2>}
                </div>
                <div className="vertical-center">
                    {haggle ? 
                    <>
                    <h1>Haggling instructions: </h1>
                    <p>{haggle}</p>
                    </>
                    : <h1>No Haggling instructions</h1>}
                </div>
            </div>
            : <h1>No item by this code exists</h1>}
        </div>
    );
}

export { ItemPrev };
import React from 'react';
import "./SinglePlayer.css"
const SinglePlayer = ({player, cart, setCart}) => {
    const { strPlayer, idPlayer, strCutout } = player;
   
    const handleAddToCart = () =>{
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            price: 120,
          };

          /* if(cart){
            const newPlayer = [...cart,info];
            setCart(newPlayer);
          } */
         

       if (cart?.length) {
            setCart([...cart, info]);
            return;
          } else {
            setCart([info]);
            return;
          } 
    }

    const handleBookmark = () =>{

    }

    console.log(player);
    return (
        <div className="card" data-aos="zoom-in">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <button className="card-btn">Details</button>
      <button onClick={handleAddToCart} className="card-btn">
        Add to cart
      </button>
      <button onClick={handleBookmark} className="card-btn">
        Bookmark
      </button>
    </div>
    );
};

export default SinglePlayer;
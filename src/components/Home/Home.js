import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Players from "../Players/Players";
import "./Home.css";
import Swal from 'sweetalert2';
const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  console.log(search);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data?.player);
      });
  }, [search]);
  console.log(players);

  const handleDelete = (id) => {
    const leftPlayer = cart.filter((pd) => pd.idPlayer !== id);
    setCart(leftPlayer);
    toast("wow deleted form cart!");
    Swal.fire(
      'Good job!',
      'Are You Sure Delete!',
      'success'
    )
  };

  return (
    <div>
      <div className="home-container">
        <div className="left-sidebar">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
          />
          <button className="search-btn">Search</button>
          <div className="players-container">
            <Players players={players} cart={cart} setCart={setCart}></Players>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="cart">
            <p>This {cart?.length}</p>
              {
              cart?.map(p=>
                <div className="cart-info-container">
                <li>{p.strPlayer}</li>
                <button
                  onClick={() => handleDelete(p.idPlayer)}
                  className="delete-btn"
                >
                  x
                </button>
              </div>
                )
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

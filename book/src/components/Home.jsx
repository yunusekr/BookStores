import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Home() {
  let history = useHistory();

  const goProducts = () => {
    history.push("/products");
  };

  return (
    <div className="flex justify-center items-center h-full w-full asd mt-[330px]">
      <div className="card" onClick={goProducts}>
        <p className="heading">Ürünleri listelemek için tıkla!</p>
        <p>Hoşgeldiniz</p>
      </div>
    </div>
  );
}

export default Home;

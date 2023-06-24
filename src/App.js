import { useEffect, useState } from "react";
import Carrinho from "./componentes/Carrinho/Carrinho";
import Filtro from "./componentes/Filtro/Filtro";
import Home from "./componentes/Home/Home";
import "./styles.css";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [ordenacao, setOrdenacao] = useState("crescente");
  const [valorMax, setValorMax] = useState(0);
  const [valorMin, setValorMin] = useState(0);
  const [buscaNome, setBuscaNome] = useState(""); // Adicione essa linha

  useEffect(() => {
    if (carrinho.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  }, [carrinho]);

  useEffect(() => {
    const carrinhoLocalStorage = localStorage.getItem("carrinho");
    if (carrinhoLocalStorage) {
      setCarrinho(JSON.parse(carrinhoLocalStorage));
    }
  }, []);

  return (
    <div className="container">
      <Filtro
        ordenacao={ordenacao}
        setOrdenacao={setOrdenacao}
        valorMax={valorMax}
        setValorMax={setValorMax}
        valorMin={valorMin}
        setValorMin={setValorMin}
        setBuscaNome={setBuscaNome} // Adicione essa linha
      />
      <Home
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        ordenacao={ordenacao}
        valorMax={valorMax}
        valorMin={valorMin}
        buscaNome={buscaNome}
      />
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </div>
  );
}

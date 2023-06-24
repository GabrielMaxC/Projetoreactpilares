import joias from "../../joias.json";
import "../Home/Home.css";

const Home = ({
  carrinho,
  setCarrinho,
  valorMax,
  valorMin,
  buscaNome,
  ordenacao
}) => {
  const adicionarJoiaAoCarrinho = (joia) => {
    const joiaExisteNoCarrinho = carrinho.find(
      (item) => item.nome === joia.nome
    );

    if (joiaExisteNoCarrinho) {
      const novoCarrinho = carrinho.map((item) =>
        joiaExisteNoCarrinho.nome === item.nome
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...joia, quantidade: 1 }]);
    }
  };
  console.log(carrinho, "carrinho");

  return (
    <div>
      <p> INFINITY STONE STORE </p>
      {joias
        .sort((joia1, joia2) => {
          return ordenacao === "crescente"
            ? joia1.nome.localeCompare(joia2.nome)
            : joia2.nome.localeCompare(joia1.nome);
        })
        .filter((joia) => {
          return valorMin ? joia.preço >= valorMin : joia;
        })
        .filter((joia) => {
          return valorMax ? joia.preço >= valorMax : joia;
        })
        .filter((joia) => {
          return joia.nome.includes(buscaNome);
        })

        .map((joia) => {
          return (
            <div className="joia-container">
              <div key={joia.id}>
                <img className="imagem" src={joia.imagem} alt={joia.nome} />
                <p>Nome: {joia.nome}</p>
                <p>Preço: {joia.preço}</p>
                <button onClick={() => adicionarJoiaAoCarrinho(joia)}>
                  Comprar
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;

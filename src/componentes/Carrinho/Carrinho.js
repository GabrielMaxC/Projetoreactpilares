const Carrinho = ({ carrinho, setCarrinho }) => {
  const removerJoiaDoCarrinho = (joia) => {
    const novoCarrinho = carrinho
      .map((item) =>
        item.nome === joia.nome
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter((item) => item.quantidade > 0);
    setCarrinho([...novoCarrinho]);
  };

  const total = carrinho.reduce((acumulador, joia) => {
    const preço = parseFloat(joia.preço);
    const quantidade = parseInt(joia.quantidade);

    if (isNaN(preço) || isNaN(quantidade)) {
      return acumulador;
    }

    return acumulador + preço * quantidade;
  }, 0);

  return (
    <div>
      <p>Carrinho</p>
      {carrinho.map((item) => {
        return (
          <div key={item.id}>
            <p>Nome: {item.nome}</p>
            <p>Quantidade: {item.quantidade}</p>
            <button onClick={() => removerJoiaDoCarrinho(item)}>Remover</button>
          </div>
        );
      })}
      <p>Total: {total}</p>
    </div>
  );
};

export default Carrinho;

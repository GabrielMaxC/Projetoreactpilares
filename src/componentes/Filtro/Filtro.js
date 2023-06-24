import "../Filtro/Filtro.css";

const Filtro = ({
  ordenacao,
  setOrdenacao,
  setValorMin,
  setValorMax,
  setBuscaNome,
  valorMax,
  valorMin,
  buscaNome
}) => {
  return (
    <div className="input">
      <p>Filtro</p>
      <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
        <option value="crescente">Crescente por nome</option>
        <option value="decrescente">Decrescente por nome</option>
      </select>
      <div className="input">
        <input
          placeholder="Valor mínimo:"
          type="number"
          onChange={(e) => setValorMin(e.target.value)}
        />
        <input
          placeholder="Valor máximo:"
          type="number"
          onChange={(e) => setValorMax(e.target.value)}
        />
        <input
          placeholder="Busca por nome:"
          type="text"
          onChange={(e) => setBuscaNome(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filtro;

import react, { useState } from "react";
import CapsLock from "./CapsLock";
import Tarefa2 from "./Tarefa2";

export default function Contador() {
  const [contador, setContador] = useState(0);
  function adicionarContador() {
    setContador(contador + 1);
  }

  const [frase, setFrase] = useState("Frase Inicial");
  function mudaFrase() {
    setFrase("Segunda Frase");
  }

  const [calcular, setcalcular] = useState(436783309);

  function subtrair() {
    setcalcular(calcular - 1);
  }
  function somar() {
    setcalcular(calcular + 1);
  }
  function multiplicar() {
    setcalcular(calcular * 2);
  }
  function dividir() {
    setcalcular(calcular / 2);
  }

  return (
    <div>
      <div>
        <CapsLock>Contador</CapsLock>
        <div>{contador}</div>
        <button onClick={adicionarContador}>+1</button>
      </div>
      <div>
        <div>
          <CapsLock>{frase}</CapsLock>
        </div>
        <button onClick={mudaFrase}>Mudar a Frase</button>
      </div>
      <div>
        <p>Chegue a 0 da maneira mais rapida</p>
        <div>
          <p>{calcular}</p>
        </div>
        <div>
          <button onClick={subtrair}>- 1</button>
          <button onClick={somar}>+ 1</button>
          <button onClick={multiplicar}>* 2</button>
          <button onClick={dividir}>/ 2</button>
        </div>
      </div>
    </div>
  );
}

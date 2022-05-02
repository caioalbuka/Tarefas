import React, { useState } from "react";

export default function Tarefa2() {
  const [nota1, setnota1] = useState();
  const [nota2, setnota2] = useState();

  const media = (n1, n2) => {
    const calcular = (parseInt(n1) + parseInt(n2)) / 2;
    console.log(calcular);
    if (calcular >= 7) {
      alert("Aprovado " + calcular);
    } else if (calcular === 10) {
      alert("Aprovadissimo");
    } else {
      alert("Reprovado!" + calcular);
    }
  };

  return (
    <div className="container">
      <h1>Calcular Média</h1>
      <p>
        {" "}
        Nota 1:
        <input
          id="n1"
          type="number"
          value={nota1}
          onChange={(e) => {
            setnota1(e.target.value);
          }}
        />
      </p>
      <p>
        {" "}
        Nota 2:
        <input
          id="n2"
          type="number"
          value={nota2}
          onChange={(e) => {
            setnota2(e.target.value);
          }}
        />
      </p>

      <button
        onClick={() => {
          media(nota1, nota2);
        }}
      >
        Calcular média
      </button>
    </div>
  );
}

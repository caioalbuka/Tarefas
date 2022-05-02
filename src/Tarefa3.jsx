import React, { useState } from "react";

export default function Tarefa3() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [num3, setnum3] = useState();

  const maior = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
      alert("Maior : " + num1);
    } else if (num2 > num3 && num2 > num1) {
      alert("Maior : " + num2);
    } else if (num3 > num2 && num3 > num1) {
      alert("Maior : " + num3);
    }
  };

  return (
    <div className="container">
      <h1>Qual o Maior Número?</h1>
      <p>
        Primeiro número:
        <input
          id="num1"
          type="number"
          value={num1}
          onChange={(e) => {
            setnum1(e.target.value);
          }}
        />
      </p>
      <p>
        Segundo número:
        <input
          id="num1"
          type="number"
          value={num2}
          onChange={(e) => {
            setnum2(e.target.value);
          }}
        />
      </p>
      <p>
        Terceiro número:
        <input
          id="num1"
          type="number"
          value={num3}
          onChange={(e) => {
            setnum3(e.target.value);
          }}
        />
      </p>
      <button
        onClick={() => {
          maior(num1, num2, num3);
        }}
      >
        Mostrar o maior número
      </button>
    </div>
  );
}

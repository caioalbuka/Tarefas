import { useState } from "react";
import CapsLock from "./CapsLock";
import Contador from "./Contator";
import Tarefa2 from "./Tarefa2";
import Tarefa3 from "./Tarefa3";

function App() {
  return (
    <div className="tarefa1">
      <p>
        <CapsLock>Tudo em capslock + Contador</CapsLock>
      </p>
      <p>
        <CapsLock>Reutilizando componente</CapsLock>
      </p>
      <Contador />
      <div className="tarefa 2">
        <Tarefa2 />
      </div>
      <div className="tarefa3">
        <Tarefa3 />
      </div>
    </div>
  );
}

export default App;

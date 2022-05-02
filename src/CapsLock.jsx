import react from "react";

export default function CapsLock(props) {
  const frase = props.children;

  const textoEmCapsLock = frase.toUpperCase();
  return <div>{textoEmCapsLock}</div>;
}

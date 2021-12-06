import React from "react";
import * as S from "./styles";

const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

const Input = ({
  value,
  label,
  placeholder,
  required,
  error,
  onChange,
  cpf,
  type,
}) => {
  return (
    <S.InputLarge>
      <input
        value={value}
        onChange={(e) =>
          onChange(cpf ? cpfMask(e.target.value) : e.target.value)
        }
        type={type}
        required
        placeholder={placeholder}
      />
      <span />
      <S.Label>
        <label>{label}</label>
      </S.Label>
    </S.InputLarge>
  );
};

export default Input;


import React from "react";
import estilo from "./Cards.module.css";
import Image from "next/image";

const Cards = ({ titulo, descricao, icone }) => {
    return (
        <div id="problema" className={estilo.card}>
            <Image src={icone} alt={titulo} className={estilo.icone} />
            <h3 className={estilo.titulo}>{titulo}</h3>
            <p className={estilo.descricao}>{descricao}</p>
        </div>
    );
};

export default Cards;

import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import MinhaImagem from "./imagem/imagem-jhordan.jpeg";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={MinhaImagem}
          nome="Jhordan"
          descricao="Oi, eu sou o Jhordan. Sou um dos alunos da Labenu. Adoro assistir filmes e séries, gosto muito de jogar video-game e codar."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem="https://png.pngtree.com/png-vector/20191008/ourmid/pngtree-email-icon-isolated-on-background-png-image_1793140.jpg"
        nome="E-mail:"
        informacao="jhordan.eu@jhordan.com"
      />

      <CardPequeno
        imagem="https://cdn1.iconfinder.com/data/icons/real-estate-84/64/x-24-512.png"
        nome="Endereço:"
        informacao="Rua Jota Jhordan"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Conhecimento sobre JavaScript, HTML5 e CSS3 e aprendendo a usar a framework React."
        />

        <CardGrande
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg"
          nome="NASA"
          descricao="Se estressando no trabalho em grupo."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;

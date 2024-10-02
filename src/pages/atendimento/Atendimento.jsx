import React, { useEffect, useState } from 'react'
import "./Atendimento.css"

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Atendimento() {

  const [atendimentoLista, setAtendimentoLista] = useState([]);

  // Função para gerar senha normal
  function gerarSenhaNormal() {
    const existingNumerosN = atendimentoLista
      .filter(atendimento => atendimento.tipo === "N")
      .map(atendimento => atendimento.numero);

    let nextNumeroNormal = 1;
    while (existingNumerosN.includes(nextNumeroNormal)) {
      nextNumeroNormal++;
    }

    let newAtendimento = {
      numero: nextNumeroNormal,
      tipo: "N"
    };

    // Atualiza o estado, adicionando ao final
    setAtendimentoLista(prevLista => [...prevLista, newAtendimento]);
  }

  // Função para gerar senha prioritária
  function gerarSenhaPrioritario() {
    const existingNumerosP = atendimentoLista
      .filter(atendimento => atendimento.tipo === "P")
      .map(atendimento => atendimento.numero);

    let nextNumeroPrioritario = 1;
    while (existingNumerosP.includes(nextNumeroPrioritario)) {
      nextNumeroPrioritario++;
    }

    let newAtendimentoPrioritario = {
      numero: nextNumeroPrioritario,
      tipo: "P"
    };

    // Atualiza o estado, adicionando ao final
    setAtendimentoLista(prevLista => [...prevLista, newAtendimentoPrioritario]);
  }

  // Função para atender senha normal (remove o primeiro "N")
  function atenderSenhaNormal() {
    setAtendimentoLista(prevLista => {
      const indexToRemove = prevLista.findIndex(atendimento => atendimento.tipo === "N");
      if (indexToRemove !== -1) {
        return [
          ...prevLista.slice(0, indexToRemove),
          ...prevLista.slice(indexToRemove + 1)
        ];
      }
      return prevLista;
    });
  }

  // Função para atender senha prioritária (remove o primeiro "P")
  function atenderSenhaPrioritario() {
    setAtendimentoLista(prevLista => {
      const indexToRemove = prevLista.findIndex(atendimento => atendimento.tipo === "P");
      if (indexToRemove !== -1) {
        return [
          ...prevLista.slice(0, indexToRemove),
          ...prevLista.slice(indexToRemove + 1)
        ];
      }
      return prevLista;
    });
  }

  return (
    <div className='atendimento-main'>
      <Header />
      <div className="atendimento-container">
        <h1>Atendimento ao cliente</h1>
        <h3>Estamos aqui para melhor lhe atender. Por favor, clique no botão para gerar uma senha</h3>
        <div className="buttons-container">
          <button onClick={gerarSenhaNormal} className="gerar-senha-normal">
            Gerar senha normal
          </button>
          <button onClick={gerarSenhaPrioritario} className="gerar-senha-prioritaria">
            Gerar senha prioritária
          </button>
        </div>
        <div className="lista-container">
          <h1 className='lista-container-titulo'>Lista de atendimento</h1>
          {atendimentoLista.map((atendimento, index) => (
            <div key={index} className={atendimento.tipo === "N" ? 'lista-paragrafo-container' : 'lista-paragrafo-container-prioritario'}>
              <p className='lista-paragrafo'>{atendimento.numero}</p>
              <p className='lista-paragrafo'>{atendimento.tipo}</p>
            </div>

          ))}
        </div>
        <div className="buttons-atender-senhas-container">
          <button onClick={atenderSenhaNormal} className="gerar-senha-normal">
            Atender senha normal.
          </button>
          <button onClick={atenderSenhaPrioritario} className="gerar-senha-prioritaria">
            Atender senha prioritária.
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Atendimento
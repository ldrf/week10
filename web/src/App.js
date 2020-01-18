import React, { useState } from 'react';

// Componente: Blocl isolado(Funçã)o que retorna algum conteudo HTML/CSS/JS , o qual não interfere no restante da aplicação
// Propriedade: Informações  que um componente PAI para o componente FILHOs
// Estado: Informações mantidas pelo componentes( Lembrar: imutabilidade)


import Header from './Header'

function App() {

  const [counter, setCounter] = useState(0);

  

  function incrementeCounter(){
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick= {incrementeCounter}>Incrementar</button>
    </>
  );
}

export default App;

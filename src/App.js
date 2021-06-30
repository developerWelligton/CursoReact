import React from 'react' 
import Primeiro from './Components/basico/Primeiro'
import ComParametro from './Components/basico/ComParametro'
import Comfilhos from './Components/basico/ComFilhos'
import Card from './Components/layout/Card/Card'
import Repeticao from "./Components/basico/repeticao"
import Condicional from "./Components/basico/Condicional"
import CondicionalIF from "./Components/basico/CondicionalComIf"
import Pai from './Components/comunicacao/direta/pai'
import Super from './Components/comunicacao//indireta/super'
import Imput from './Components/forms/input'
import Contador from './Components/Contador/contador'
import Header from './Components/ComponentsCBF/Header/Header'
import Corpo from './Components/ComponentsCBF/Corpo/Corpo'
import Dados from './Components/ComponentsCBF/Dados/Dados'
import ExemploCSS from './Components/ComponentsCBF/ExemploCSS/ExemploCSS'
import Relogio from './Components/ComponentsCBF/Relogio/Relogio'
import ExemploState from './Components/ComponentsCBF/ExemploState/ExemploState'
import Lampada from './Components/ComponentsCBF/ExemploEventos/Lampada'
import RedenrizacaoCondicional from './Components/ComponentsCBF/RedenrizacaoCondicional/RedenrizacaoCondicional'
import RenderizacaoCondicional2 from './Components/ComponentsCBF/RenderizacaoCondicional2/RenderizacaoCondicional'
import TrabalhandoComLista from './Components/ComponentsCBF/TrabalhandoComLista/TrabalhandoComLista'
import TrabalhandoComLista2 from './Components/ComponentsCBF/TrabalhandoComLista2/TrabalhandoComLista2'
import ManipularFormulario from './Components/ComponentsCBF/ManipulandoElementosFormulario/ManipularFormulario'
import ManipularFormulario2 from './Components/ComponentsCBF/ManipulandoElementosFormulario2/ManipulandoElementosFormulario2'
import ManipilarObjeto from './Components/ComponentsCBF/ManipulandoObjetosComState/ManipularObjeto'
import ElevacaoSTATE from './Components/ComponentsCBF/ElevacaoSTATE/ElevacaoSTATE'
import Contencao from './Components/ComponentsCBF/CONTENCAO/Contencao'
import HookUseEffect from './Components/ComponentsCBF/HookUseEffec/HookUseEffec'
import './index.css'; 
import './App.css'
 
export default (props) => {  
  //aula6
    const cnl = 'CFB cursos'
    const yt = 'CFB cursos'
    const crs = 'Curso de React'
  return(  
    <> 
    
    <div className = "app" id = "app" >
    <h1>Fundamentos React</h1>

    <div className = "Cards">
      <Card titulo="#26 - Dados CFB aula 19" color="">
          <HookUseEffect></HookUseEffect>
        </Card>
        <Card titulo="#25 - Dados CFB aula 18" color="">
          <Contencao></Contencao>
        </Card>
        <Card titulo="#24 - Dados CFB aula 16 e 17" color="">
          <ElevacaoSTATE></ElevacaoSTATE>
        </Card> 
        <Card titulo="#23 - Dados CFB aula 15" color="">
          <ManipilarObjeto></ManipilarObjeto>
        </Card>
        <Card titulo="#22 - Dados CFB aula 14" color="">
        <ManipularFormulario2></ManipularFormulario2>
        </Card>
        <Card titulo="#21 - Dados CFB aula 14" color="">
                <ManipularFormulario></ManipularFormulario>
        </Card>
         <Card titulo="#20 - Dados CFB aula 13" color="">
               <TrabalhandoComLista2></TrabalhandoComLista2>
        </Card>
        <Card titulo="#19 - Dados CFB aula 13" color="">
               <TrabalhandoComLista></TrabalhandoComLista>
        </Card>
        <Card titulo="#18 - Dados CFB aula 12" color="">
               <RenderizacaoCondicional2></RenderizacaoCondicional2>
        </Card>
        <Card titulo="#17 - Dados CFB aula 12" color="">
              <RedenrizacaoCondicional></RedenrizacaoCondicional>
        </Card>
        <Card titulo="#16 - Dados CFB aula 11" color="">
              <Lampada></Lampada>
        </Card>
        <Card titulo="#15 - Dados CFB aula 10" color="">
               <ExemploState></ExemploState>
        </Card>
        <Card titulo="#14 - Dados CFB aula 9" color="">
               <Relogio></Relogio>
        </Card>
        <Card titulo="#13 - Dados CFB aula 8" color="">
              <ExemploCSS></ExemploCSS> 
        </Card>
          
         <Card titulo="#13 - Dados CFB aula 7" color="">
         
               <Dados canal= {cnl} youtube = {yt} curso = {crs}></Dados>
        </Card>

        <Card titulo="#12 - Corpo CFB aula 7 " color="">
               <Corpo></Corpo>
        </Card>

        <Card titulo="#11 - header CFB aula 6" color="">
              <Header></Header> 
        </Card> 

        <Card titulo="#10 - Contador" color="#BBB942">
              <Contador passo={10} valor={100}></Contador>
        </Card> 

        <Card titulo="#09 - Input" color="#AAA582">
              <Imput></Imput>
        </Card> 

        <Card titulo="#08 - Comunicação indireta" color="#FA5582">
              <Super></Super>
        </Card> 

        <Card titulo="#07 - Comunicação direta" color="#FA5882">
                <Pai sobrenome="Santos"></Pai>
        </Card>

        <Card titulo="#06 - Condicional com If v2" color="#d69cbc">
                <CondicionalIF numero={10}></CondicionalIF>
        </Card>

        <Card titulo="#05 - Condicional v1" color="#fe4a49">
                <Condicional numero = {11}></Condicional>
        </Card>

        <Card titulo="#04 - Componentes List" color="#fed766">
                <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componentes com filhos" color =" #3b7dd8">
                <Comfilhos>
                  <ul>
                    <li>Ana</li>
                    <li>Bireca</li>
                    <li>Welligton</li>
                  </ul>
                </Comfilhos>
        </Card>

        <Card titulo="#02 - Componentes com parâmetro" classname = "app" color ="#343d46">
                <ComParametro 
                titulo = "Esse é um titulo"
                subtitulo = "Esse é um subtitulo"/>
        </Card>

        <Card titulo="#01 - Primeiro componenteX" color ="#8d5524 "><Primeiro/>
        </Card> 
    </div>
      </div> 
    </>
  )}





















  // <Dados curso={professor} tema='POO'></Dados>

  //colocarei dentro do componente corpo

 

 /*aula passada
 import Relogio from './Components/Relogio/Relogio'

const textoDestaque = {
    color:'#00f',
    fontSize:'3em'
  } 

 return  
    <section className="caixa">
    <Relogio></Relogio> 
     <h1 style={{color:'#f00', fontSize:'5EM'}}>Meu título</h1>
    <p style={textoDestaque}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p className='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <a >Home</a>
    </section>
    
    css

    .texto{
  color: #555;
  font-size: 7em;
}
.caixa{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.caixa a{
  text-decoration: none;
  font-size: 100px;
  color: red;
}

.caixa a:hover{
background-color: aquamarine;
color: azure;
}
    */ 

import React ,{useState}from 'react'
 

export default function RedenrizacaoCondicional(){

    const [log,setLog]=useState(false);
    const msgLogin=()=>{
        return 'Usuário Logado'
    }

    const msgLogoff=()=>{
        return 'Favor Logar'
    }


    const cumprimento=()=>{
        const hora = new Date().getHours;

        if(hora >=0 && hora < 13){
            return <h1>Bom dia</h1>
        }else if(hora >=13 && hora < 18){
            return <h1>Boa Tarde</h1>
        }else{
            return <h1>Boa noite</h1>
        }
    }

    return(<>
    
        {cumprimento()}    
        <p>{log?msgLogin():msgLogoff()}</p>
        <button onClick={()=>setLog(!log)}> {log?'Logoff':'Login'} </button>
    </>)
}
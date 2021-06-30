import React, { useState } from 'react'

export default function ManipularObjeto(){

        const [form,setForm] = useState({"nome":"","curso":"","ano":""});//JSON

        //função manipuladora
        const handFormChange=(e)=>{

            //verificar cada elemento
            
            if(e.target.getAttribute("name")=='fnome'){//nome
                setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
            }else if(e.target.getAttribute("name")=='fcurso'){//curso
                setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
            }else if(e.target.getAttribute("name")=='fano'){
                setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
            }

        }

    return(
        <>
          <br></br>
          <label>Nome</label>
        <input type="text" 
               name='fnome'
               value={form.nome}
               onChange={(e)=>handFormChange(e)}
        />
        <br></br>
         <label>Curso</label>
         <input type="text" 
               name='fcurso'
               value={form.curso}
               onChange={(e)=>handFormChange(e)}
        />
          <br></br>
         <label>Ano</label>
         <input type="text" 
               name='fano'
               value={form.ano}
               onChange={(e)=>handFormChange(e)}
        />
        <p>Nome digitado: {form.nome} </p>
        <p>Curso digitado: {form.curso} </p>
        <p>Ano digitado: {form.ano} </p>
        </>
    )
}
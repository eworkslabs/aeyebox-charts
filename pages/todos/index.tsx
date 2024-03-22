import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import { Container, Form, List, ListItem } from '@/pages/todos/components'



function Home() {
    const [data, setData] = useState([]);
    const [atualizarGrid, setAtualizarGrid] = useState(false);
    const formRef = useRef();
    const url = 'http://localhost:3000/';

   async function CarregaDados(){
    await axios.get(url+'prdoutos').then(response => setData(response.data));
   }

   async function inputDados (e){
    e.preventDafault();
    const {inputDesc}   = formRef.current;
    const dados ={
            "id": 2,
            "nome": inputDesc.value
    }
    
    await axios.post(url+'produtos', dados)
    setAtualizarGrid(!atualizarGrid);
    
   }

    useEffect(()=>{
        CarregaDados();
    },[])

    return(
        <Container>
            <Form onSubmit={inputDados} ref={formRef}>
                <input type="text" id='inputDesc'/>
                <button type="submit">Salvar</button>
            </Form>
            <List>
                {data.map((data)=>{
                    return()
                })}
            </List>
        </Container>
    )

   
}
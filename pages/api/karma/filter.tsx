import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { log } from "console";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.API_TOKEN}`,
  };

  const { data } = await axios.post(`${process.env.OLLAMA_API}/generate`, {
    model: process.env.OLLAMA_MODEL,
    stream: false,
    prompt: `Insira a frase: ${req.body.prompt}
Data Atual: ${new Date()}

Instruções:
1. Identifique a ação (Alterar, Mudar, Selecionar, etc.)
2. Identifique o verbo principal da frase
3. As entidades fixas são:
   - Company: Acme Inc, Eworks, Karma
   - Location: Los Angeles
4. Identifique as entidades que podem ser alteradas (Plant, Line, Machine, Date)
5. Identifique os valores correspondentes a cada entidade que pode ser alterada
   - Se a frase contiver o prefixo "Plant", o valor é uma entidade do tipo Plant
   - Se a frase contiver o prefixo "Line", o valor é uma entidade do tipo Line
   - Se a frase contiver o prefixo "Machine", o valor é uma entidade do tipo Machine
   - Se a frase contiver algo relacionado a uma data (por exemplo: ontem, semana passada), a data deve ser formatada YYYY-MM-DD considerando na Data Atual, caso não tenha seja a data de hoje
6. Crie uma tabela separada por vírgulas no seguinte formato:
   Verbo,Company,Acme Inc,Location,Los Angeles,Entidade1,Valor1,Entidade2,Valor2,...

Responda somente [A tabela separada por vírgulas] como OUTPUT sem NOTE`  }, { headers });

  const { response } = data;
  const triggers = response.split(/\n\n/img).pop();
  log(triggers);

  res.status(200).json({ triggers: response.split(/\n\n/img) });
}

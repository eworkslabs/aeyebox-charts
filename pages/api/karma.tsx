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
    prompt:
      `Insira a frase: ${req.body.prompt}
    Data Atual: ${new Date()}

Instruções:
1. Identifique a ação (Alterar, Mudar, Selecionar, etc.)
2. Identifique o verbo principal da frase
3. Identifique as entidades presentes na frase (Company, Location, Plant, Line, Machines, Date)
4. Identifique os valores correspondentes a cada entidade
   - Se a frase contiver o prefixo "Plant", o valor é uma entidade do tipo Plant
   - Se a frase contiver o prefixo "Line", o valor é uma entidade do tipo Line
   - Se a frase contiver o prefixo "Machine", o valor é uma entidade do tipo Machine
   - Se a frase contiver algo relacionado a uma data (por exemplo: ontem, semana passada), a data deve ser formatada YYYY-MM-DD considerando na Data Atual, caso não tenha seja a data de hoje
5. Crie uma tabela separada por vírgulas no seguinte formato:
   Verbo,Entidade1,Valor1,Entidade2,Valor2,...

Exemplos:
* Alterar para empresa ABC Corporation da Localizacao em Los Angeles
* Selecionar Planta na Linha X
* Mudar Data para Ontem
* Selecionar Máquina One

Responda somente: [A tabela separada por vírgulas] como OUTPUT`
  }, { headers });

  const { response } = data;

  log(response);

  res.status(200).json({ data: response.split(/\n\n/img) });
}

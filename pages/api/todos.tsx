import type { NextApiRequest, NextApiResponse } from "next";
import type { Todos } from "../../interfaces";


const todos: Todos[] = [{ id: 1, title:"delectus aut autem", completed: "false" }, { id: 2, title:"quis ut nam facilis et officia qui", completed:"false" }, { id: 3, title:"fugiat veniam minus", completed:"false" }];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Todos[]>,
) {

  res.status(200).json(todos);
}


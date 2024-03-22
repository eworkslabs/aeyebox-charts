import styles from '@/styles/Todos.module.css'

export async function getStaticProps() {
    const data = await fetch('http://localhost:3000/api/todos')

    const todos = await data.json()

   

    return {
        props: { todos },
    }
}

export default function Todos({ todos }){
    return(
        <>
        
            <h1>Tarefas para fazer</h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
   
        </>
    )
}
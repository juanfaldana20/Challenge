import { Todoltem } from ' ./TodoItem'

export const TodoList = ({todos}) =>{
    return (
        <ul className=' list-group'>
            {
                todos.map( (todo, key) => {
                    return (
                        <Todoltem key={key} todo={todo} />
                    )
                })
            }
        </ul>
    )
}

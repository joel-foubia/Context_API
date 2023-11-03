
export default function Display({ todo, handleDelete }) {
    return (
        <div>
            {todo.map((todo, index) => <Item todo={todo} handleDelete={handleDelete} key={index} />)}
        </div>
    )
}

function Item({ todo, handleDelete }) {

    return <>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Profession</th>
            </tr>
            <tr>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.profession}</td>
            </tr>
        </table>
        <button onClick={()=> handleDelete(todo.id)}>Delete</button>
    </>
}



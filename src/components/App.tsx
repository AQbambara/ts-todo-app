import axios from "axios"

export default function App(){
    
    const todoUrl: string = "http://localhost:3100/todos"

    const fetchData = async () => {
        const response = await axios.get(todoUrl)
        console.log(typeof(response.data))
        return console.log(response.data)
    }

    fetchData()
    
    return (
        <>
            <h1>Hello React!!!</h1>
        </>
    )
}
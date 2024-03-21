import { useState } from "react"
import MainList from "../MainList/MainList"

export default function Main() { 
    const [ list, setList ] = useState(['clab'])

    return (
       <div className="main">
            <MainList/>
       </div>
    )
}
import { useState } from "react"
import Club from "../Club/Club"
import Trade from "../Trade/Trade"

export default function Main() { 
    const [tabe, setTab] = useState('club')
    const onTabTrade = () => {
        setTab('trade')
    }

    const onTabClub = () => {
        setTab('club')
    }

    if(tabe==='trade'){
        return (
            <div className="main">
                 <Trade tabe={tabe} onTabClub={onTabClub} onTabTrade={onTabTrade}/>
            </div>
         )
    }else if(tabe==='club'){
        return (
            <div className="main">
                 <Club tabe={tabe} onTabClub={onTabClub} onTabTrade={onTabTrade}/>
            </div>
         )
    }

    
}
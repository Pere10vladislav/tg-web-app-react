import { useState } from "react"
import Club from "../Club/Club"
import Trade from "../Trade/Trade"

export default function Main() { 
    const [ user, setUser ] = useState([])
    const [tabe, setTab] = useState('club')

    useEffect(() => {

        async function fetchData() {
            const userResponse = await axios.get('https://65e996c3c9bf92ae3d399125.mockapi.io/user/1')
            setUser(userResponse.data)
        }
        fetchData ()
    },[])


    const onTabTrade = () => {
        setTab('trade')
    }
    const onTabClub = () => {
        setTab('club')
    }

    if(tabe==='trade'){
        return (
            <div className="main">
                 <Trade tabe={tabe} onTabClub={onTabClub} onTabTrade={onTabTrade} referals={user.referals}/>
            </div>
         )
    }else if(tabe==='club'){
        return (
            <div className="main">
                 <Club tabe={tabe} onTabClub={onTabClub} onTabTrade={onTabTrade} referals={user.referals}/>
            </div>
         )
    }

    
}
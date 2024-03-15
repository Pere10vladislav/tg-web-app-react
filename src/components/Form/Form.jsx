import { useEffect, useState } from "react"
import { useTelegram } from "../../hooks/useTelegram"
import axios from 'axios'
import './Form.css'

export default function Form() { 
    const {tg, user, telegram_id} = useTelegram()
    const [ rgUser, setRgUser ] = useState({
        user: user?.username,
        telegram_id: telegram_id,
        clab: false
    })
    const [ users, setUsers ] = useState({})
    const [showWallet, setShowWallet] = useState(false)
    
    const onAddUser = async (obj) => {
        await axios.post('https://65e996c3c9bf92ae3d399125.mockapi.io/user', obj)
        }


    const onchangeName = (e) => {
        setRgUser((prev) => ({ ...prev, user: e.target.value }))
    }

    const onchangeEmail = (e) => {
        setRgUser((prev) => ({ ...prev, email: e.target.value }))
    }

    const onchangeWallet = (e) => {
        setRgUser((prev) => ({ ...prev, wallet: e.target.value }))
    }



    useEffect(() => {

        async function fetchData() {
            const userResponse = await axios.get('https://65e996c3c9bf92ae3d399125.mockapi.io/user')
            setUsers(userResponse.data)
        }
        fetchData ()
        const checkedUser = () => {
            return users.some((obj) => Number(obj.telegram_id) === Number(rgUser.telegram_id))
        }
        setShowWallet(checkedUser)
        tg.MainButton.setParams({
            text: 'Регистрация'
        })
    },[])

    useEffect(() => {
       if(!rgUser.user || !rgUser.email || !rgUser.wallet){ 
            tg.MainButton.hide()
       } else {
            tg.MainButton.show()
       }
    }, [rgUser])

    return (
        (!showWallet ? 
        <div className="form">    
            <h3>Введите ваши данные</h3>
            {true}
            <input type="text" placeholder={"Имя"} value={rgUser.user} onChange={onchangeName}/>
            <input type="text" placeholder={"Email"} value={rgUser.email} onChange={onchangeEmail}/>
            <input type="text" placeholder={"Trc-20"} value={rgUser.wallet} onChange={onchangeWallet}/>
            <button onClick={() => onAddUser(rgUser)}>Отправить</button>
        </div> : <div>sdasd</div>
        )
      
    )
}
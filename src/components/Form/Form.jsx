import { useEffect, useState } from "react"
import { useTelegram } from "../../hooks/useTelegram"
import axios from 'axios'
import './Form.css'

export default function Form() { 
    const {tg, user} = useTelegram()
    const [ rgUser, setRgUser ] = useState({
        user: user?.username,
    })
    
    const onAddUser = async (obj) => {
        await axios.post('https://65e996c3c9bf92ae3d399125.mockapi.io/user', obj)
        }


    const onchangeName = (e) => {
        setRgUser((prev) => ({ ...prev, name: e.target.value }))
    }

    const onchangeEmail = (e) => {
        setRgUser((prev) => ({ ...prev, email: e.target.value }))
    }

    const onchangeWallet = (e) => {
        setRgUser((prev) => ({ ...prev, wallet: e.target.value }))
    }

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Регистрация'
        })
    },)

    useEffect(() => {
       if(!rgUser.name || !rgUser.email || !rgUser.wallet){ 
            tg.MainButton.hide()
       } else {
            tg.MainButton.show()
       }
    }, [rgUser])

    return (
       <div className="form">    
            <h3>Введите ваши данные</h3>
            <input type="text" placeholder={"Имя"} value={rgUser.name} onChange={onchangeName}/>
            <input type="text" placeholder={"Email"} value={rgUser.email} onChange={onchangeEmail}/>
            <input type="text" placeholder={"Trc-20"} value={rgUser.wallet} onChange={onchangeWallet}/>
            <button onClick={() => onAddUser(rgUser)}>Отправить</button>
       </div>
    )
}
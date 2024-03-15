import { useEffect, useState } from "react"
import { useTelegram } from "../../hooks/useTelegram"
import './Form.css'

export default function Form() { 
    const {tg, user} = useTelegram()
    const [name, setName] = useState(user?.username)
    const [email, setEmail] = useState('')
    const [wallet, setWallet] = useState('')
    
    const onAddUser = async () => {
        user = {
            name: name,
            email: email,
            wallet: wallet
        }
        await axios.post('https://65e996c3c9bf92ae3d399125.mockapi.io/user', user)
        }


    const onchangeName = (e) => {
        setName(e.target.value)
    }

    const onchangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onchangeWallet = (e) => {
        setWallet(e.target.value)
    }

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Регистрация'
        })
    },)

    useEffect(() => {
       if(!name || !email || !wallet){ 
            tg.MainButton.hide()
       } else {
            tg.MainButton.show()
       }
    }, [name, email, wallet])

    return (
       <div className="form">    
            <h3>Введите ваши данные</h3>
            <input type="text" placeholder={"Имя"} value={name} onChange={onchangeName}/>
            <input type="text" placeholder={"Email"} value={email} onChange={onchangeEmail}/>
            <input type="text" placeholder={"Trc-20"} value={wallet} onChange={onchangeWallet}/>
            <button onClick={onAddUser}>Отправить</button>
       </div>
    )
}
import { useEffect, useState } from "react"
import { useTelegram } from "../../hooks/useTelegram"

export default function Form() { 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [wallet, setWallet] = useState('')
    const {tg} = useTelegram()

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
       if(!name || !email || wallet){ 
            tg.MainButton.hide()
       } else {
            tg.MainButton.show()
       }
    }, [name, email, wallet])

    return (
       <div>    
            <h3>Введите ваши данные</h3>
            <input type="text" placeholder={"Имя"} value={name} onChange={onchangeName}/>
            <input type="text" placeholder={"Email"} value={email} onChange={onchangeEmail}/>
            <input type="text" placeholder={"Trc-20"} value={wallet} onChange={onchangeWallet}/>
       </div>
    )
}
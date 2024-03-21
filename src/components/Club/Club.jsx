import { useState } from "react"
import './Club.css';

export default function Club({onTabClub, onTabTrade, referals}) {     


    return (
       <div className="MailList">
            <div className="heared">
                <div className="header__logo">
                    <h5>Клубные вознаграждения</h5>
                    <div>40000.00 <span>USDT</span></div>
                </div>
                <div className="header__btn">
                    <button>Вывести</button>
                </div>
            </div>
            <div className="info">
                <div className="info__presentation">
                    <div className="info__presentation--leftBlock">
                        <h5>Презентация Smart Club</h5>
                        <span>Скачать</span>
                    </div>
                    <img src=""/>
                </div>
                <div className="info__chenal">
                    <div className="info__chenal--leftBlock">
                        <h5>Презентация Smart Club</h5>
                        <span><a href="https://t.me/+YF8N2z0U5AgzMzY6">Перйти</a></span>
                    </div>
                </div>
            </div>
            <div className="navigat">
                <div className="activ" onClick={onTabClub}>
                    Клубные вознаграждения
                </div>
                <div onClick={onTabTrade}>
                    Торговые вознаграждения
                </div>
            </div>
            <div className="referal__list">
                <div className="referal__list--header">
                    <ul>
                        <li>Все</li>
                        <li className="activ">1 ур</li>
                        <li>2 ур</li>
                        <li>3 ур</li>
                        <li>4 ур</li>
                        <li>5 ур</li>
                    </ul>
                </div>
                <div className="referal__list--body">
                    <ul>
                        <li>
                            <div className="referal__list--body-li-left">
                                <h5>Татьяна</h5>
                                <span>@tat1203</span>
                            </div>
                            <div className="referal__list--body-li-right">
                                <h5>1ур</h5>
                                <span>tttt123@gmail.com</span>
                            </div>
                        </li>
                        <li>
                            <div className="referal__list--body-li-left">
                                <h5>Татьяна</h5>
                                <span>@tat1203</span>
                            </div>
                            <div className="referal__list--body-li-right">
                                <h5>1ур</h5>
                                <span>tttt123@gmail.com</span>
                            </div>
                        </li>
                        <li>
                            <div className="referal__list--body-li-left">
                                <h5>Татьяна</h5>
                                <span>@tat1203</span>
                            </div>
                            <div className="referal__list--body-li-right">
                                <h5>1ур</h5>
                                <span>tttt123@gmail.com</span>
                            </div>
                        </li>
                        <li>
                            <div className="referal__list--body-li-left">
                                <h5>Татьяна</h5>
                                <span>@tat1203</span>
                            </div>
                            <div className="referal__list--body-li-right">
                                <h5>1ур</h5>
                                <span>tttt123@gmail.com</span>
                            </div>
                        </li>
                        <li>
                            <div className="referal__list--body-li-left">
                                <h5>Татьяна</h5>
                                <span>@tat1203</span>
                            </div>
                            <div className="referal__list--body-li-right">
                                <h5>1ур</h5>
                                <span>tttt123@gmail.com</span>
                            </div>
                        </li>
                        <li>
                            <div className="referal__list--body-li-left">
                                <h5>Татьяна</h5>
                                <span>@tat1203</span>
                            </div>
                            <div className="referal__list--body-li-right">
                                <h5>1ур</h5>
                                <span>tttt123@gmail.com</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

       </div>
    )
}
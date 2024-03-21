import { useState } from "react"
import './MainList.css';

export default function MainList({}) {     
    return (
       <div className="MailList">
            <div className="heared">
                <div className="header__logo">
                    <h5>Клубные вознаграждения</h5>
                    <div>100.00 <span>USDT</span></div>
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
                        <span>Скачать</span>
                    </div>
                </div>
            </div>
            <div className="navigat">
                <div>
                    Клубные вознаграждения
                </div>
                <div>
                    Торговые вознаграждения
                </div>
            </div>
            <div className="referal__list">
                <div className="referal__list--header">
                    <ul>
                        <li>Все</li>
                        <li>1 ур</li>
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
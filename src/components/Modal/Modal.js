import { Link, Routes, Route } from 'react-router-dom'
import s from './Modal.module.css'
import FormElem from '../FormElem/FormElem'
import {ReactComponent as XMarkIcon} from '../../icons/xmark-solid.svg'


function Modal({active, setActive}) {
  return (
    <div className={`${s.modal} ${active && s.active}`}>
      <div className={`${s.modal_content} ${active && s.active}`}>
      {/* <button onClick={()=> setActive(false)} style={{cursor: 'pointer'}}>X</button> */}

      <XMarkIcon onClick={()=> setActive(false)} className={s.xmark_icon}/>
      
      {/* <Link to={'/registration'}>
        <p>to REG!</p>
      </Link> */}
        <Routes>
          <Route path='/login' element={<FormElem
                                          title='Авторизация'
                                          button={{submit:'Авторизоваться', redirect: 'Регистрация'}}
                                          link={'/registration'}
                                          type={'login'}
                                          input={{email: 'email', password: 'Пароль'}}
                                          infoText='Введите логин и пароль вашего эккаунта'
                                        />}/>
          <Route path='/registration' element={<FormElem
                                          title='Регистрация'
                                          button={{submit:'Зарегистрироваться', redirect: 'Авторизация'}}
                                          link={'/login'}
                                          type={'reg'}
                                          input={{email: 'email', password: 'Пароль', repeatPassword: 'Повторить пароль'}}
                                          infoText='Регистрируясь на сайте вы соглашаетесь с нашими правилами и политикой конфиденциальности'
                                        />}/>
          <Route path='/reset' element={<FormElem
                                          title='Сброс пароля'
                                          button={{submit:'Сброс пароля', redirect: 'Авторизация'}}
                                          link={'/login'}
                                          type={'reset'}
                                          input={{email: 'email'}}
                                          infoText='Укажите почту зарегистрированного эккаунта. Ссылка на сброс пароля будет действовать 24 часа.'
                                        />}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default Modal
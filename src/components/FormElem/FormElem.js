import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import s from './FormElem.module.css'
import Input from '../../UI/Input/Input'
import { useForm} from 'react-hook-form'


function FormElem(props){

  const {title, button, link, type, input, infoText} = props

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: {errors}
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    // console.log(watch('email'))
    reset()
  }

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>
        <p>{input.email}</p>
        <Input {...register('email', {
          required: 'Почта должна быть заполнена',
          pattern: {
            value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
            message: 'Указана неверная почта'
        }
        })}/>
        {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}
       
        {/* Пароль */}

        {type !== 'reset' && 
        <>
          <p>{input.password}</p>
          <Input {...register('password', {
            required: 'Пароль должен быть заполнен',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: 'Пароль должен содержать минимум 8 букв и хотя бы 1 цифру'
          }
          })}/>
          {errors.password && <p className={s.warning_text}>{errors.password.message}</p>}
        </>
        }

        {/* Повтор пароля */}

        {type === 'reg' && 
        <>
          <p>{input.repeatPassword}</p>
          <Input {...register('repeatPassword', {
            required: 'Подтверждение пароля должно быть заполнено',
            validate: (value) => value === watch('password') || 'Пароли не совпадают'
          })}/>
          {errors.repeatPassword && <p className={s.warning_text}>{errors.repeatPassword.message}</p>}
        </>
        }

        <p className={s.info_text}>{infoText}</p>

        {type === 'login' && (
          <Link to={'/reset'}>
            <p>Сбросить пароль</p>
          </Link>
        )}
        <Link to={link}>
          <Button title={button.redirect} color={'white'}/>
        </Link>
          <Button title={button.submit} color={'yellow'}/>

      </form>
    </div>
  )
}

export default FormElem

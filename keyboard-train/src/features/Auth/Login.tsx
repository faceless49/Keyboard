import React from 'react'

import s from './Login.module.scss'
import UIField from '../../component/UIField/UIField'
import modal__bg from '../../assets/images/bg.jpg'
import Btn from '../../component/Btn/Btn'


import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import { Redirect } from 'react-router-dom'
import { googleSignInTC, loginTC } from '../../redux/reducers/AuthReducer'



export const Login: React.FC = () => {
	const dispatch = useDispatch()
	const { isAuth, errorMessage, email, password } = useSelector((state: StateType) => state.auth);
	console.log('login', errorMessage)

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		rememberMe: Yup.boolean(),
	})

	if (isAuth) return <Redirect to={'/interviews'} />

	return (
		<div className={s.modal}>
			<img className={s.modal__img} src={modal__bg} alt="#"/>
			<div className={s.modal__body}>
				<h2 className={s.modal__title}>login</h2>
				<Formik
					initialValues={{
						email: email,
						password: password,
						rememberMe: false,
					}}
					validationSchema={SignupSchema}
					onSubmit={async (values, actions) => {
						try {
							await dispatch(loginTC(values.email, values.password, values.rememberMe));
						}
						catch (error) {
							actions.setStatus('Введите корректный логин или пароль')
						}
					}}
				>
					{({ errors, touched, isSubmitting, isValid, dirty, status }) => (
						<Form className={s.modal__form}>
							<UIField
								className={`${s.Label__input}`}
								title={'Введите Email'}
								errors={errors}
								touched={touched}
								name={'email'}
								type={'email'}
							/>
							<UIField
								className={s.Label__input}
								title={'Введите пароль'}
								errors={errors}
								touched={touched}
								name={'password'}
								type={'password'}
							/>
							<UIField
								className={s.Label__input}
								title={'Запомнить меня'}
								errors={errors}
								touched={touched}
								name={'checked'}
								type={'checkbox'}
							/>
							<Btn
								text={'Отправить'}
							/>
							{status && (
								<div className={s.error}>{status}</div>
							)}
						</Form>
					)}
				</Formik>
				<button onClick={dispatch(googleSignInTC)}>google</button>
			</div>
		</div>
	)
}

import React from 'react'
import { Formik, Form } from 'formik'
import s from './Login.module.scss'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { registerTC } from '../../redux/reducers/AuthReducer'
import UIField from '../../component/UIField/UIField'

export const Register: React.FC = () => {
	const dispatch = useDispatch();

	const SignupSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
	})

	return (
		<div className={s.authentication}>
			<div className={s.authenticationCard}>
				<h2 className={s.authenticationTitle}>Регистрация</h2>
				<Formik
					initialValues={{
						email: '',
						password: '',
						rememberMe: false,
					}}
					validationSchema={SignupSchema}
					onSubmit={async (values, actions) => {
						await dispatch(registerTC(values.email, values.password));
						actions.setSubmitting(false);
					}}
				>
					{({ errors, touched, isSubmitting, isValid, dirty }) => (
						<Form className="authentication-form">
							<UIField
								labelClassName={`${s.Label__row}`}
								inputClassName={`${s.Label__input}`}
								title={'Введите Email'}
								errors={errors}
								touched={touched}
								name={'email'}
								type={'email'}
							/>
							<UIField
								labelClassName={`${s.Label__row}`}
								inputClassName={`${s.Label__input}`}
								title={'Введите пароль'}
								errors={errors}
								touched={touched}
								name={'password'}
								type={'password'}
							/>
							<div className="btns-group">
								<button 
									type="submit"
									className="btn"
									disabled={(!isValid || !dirty) || isSubmitting} 
								>
									Отправить
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

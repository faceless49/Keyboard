import React from 'react'
import s from './UIField.module.scss';
import { Field } from 'formik'

type FieldProps = {
	errors: any
	touched: any
	title: string
	name: string
	type: string
}

const UIField = ({errors, touched, title, name, type}: FieldProps) => {
	return (
		<label className={s.Label}>
			<div className={s.Label__row } >
				<p className={s.Label__text}>{title}</p>
				<Field
					className={s.Label__input}
					name={name}
					type={type}
				/>
			</div>
			{errors[name] && touched[name] ? (
				<div className={s.error}>{errors[name]}</div>
			) : null}
		</label>
	)
}

export default UIField;
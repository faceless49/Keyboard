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
		<label className={s.fieldLabel}>
			<div className={s.field}>
				<span>{title}</span>
				<Field
					className={s.inputField}
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
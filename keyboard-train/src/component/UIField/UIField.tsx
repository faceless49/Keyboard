import React from 'react'
import s from './UIField.module.scss';

import { Field } from 'formik'

type FieldProps = {
	errors: any
	touched: any
	title: string
	name: string
	type: string
	inputClassName: string
	labelClassName: string
}

const UIField = (props: FieldProps) => {
	const labelClass = props.labelClassName
	
	
	return (
		<label className={s.Label}>
			<div className={labelClass} >
				<p className={s.Label__text}>{props.title}</p>
				<Field 
					className={props.inputClassName}
					name={props.name}
					type={props.type}
				/>
			</div>
			{props.errors[props.name] && props.touched[props.name] ? (
				<div className={s.error}>{props.errors[props.name]}</div>
			) : null}
		</label>
	)
}

export default UIField;
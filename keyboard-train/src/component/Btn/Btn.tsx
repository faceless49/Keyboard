import React from 'react'
import s from './Btn.module.scss';


type BthProps = {
	text: string
}


const Btn = (props:BthProps) => {
	return (
		<button
			className={s.btn}
			type={'submit'}
		//disabled={(!isValid || !dirty) || isSubmitting}
		>
			{props.text}
		</button>
	)
}

export default Btn;
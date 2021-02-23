import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOutTC } from '../../redux/reducers/AuthReducer'
import { StateType } from '../../redux/store'
import s from './Header.module.scss'

export const Header = () => {
	const isAuth = useSelector<StateType, boolean>((state) => state.auth.isAuth)
	const isAdmin = useSelector<StateType, boolean>(state => state.auth.isAdmin)
	const dispatch = useDispatch()

	return (
		<div className={s.header}>
			<div className={s.container}>
				{!isAuth ? (
					<div className={s.authGroup}>
						<div className={s.authBtn}>
							<NavLink to='/'> Login</NavLink>
						</div>
						<div className={s.authBtn}>
							<NavLink to='/register'> Register</NavLink>
						</div>
					</div>
				) : (<div>
						<div className={s.authBtn}>
							{isAdmin ? <NavLink to='/admin'> Admin Profile</NavLink> :<NavLink to='/profile'> Profile</NavLink>}
						</div>
						<div className={s.authBtn} onClick={() => dispatch(logOutTC())}>
							log out
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

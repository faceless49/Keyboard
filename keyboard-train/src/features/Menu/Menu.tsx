import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Menu.module.scss'
import { useDispatch } from 'react-redux'
import { getCards } from '../../redux/reducers/KeyboardReducer'


export const Menu = () => {

	const category = [
		{ name: 'Class', link: 'Class' },
		{ name: 'Function', link: 'Function' },
		{ name: 'Promise', link: 'Promise' },
		{ name: 'Hosting', link: 'Hosting' },
		{ name: 'Prototype', link: 'Prototype' },
	]

	const dispatch = useDispatch()

	return (
		<div className={s.menu}>
			<div className={s.container}>
				<div>
					<NavLink to='/' className={s.link}>
							<h3 className={s.menu__title}>Typing and learn js</h3>
					</NavLink>
				</div>
				<div>

					{category.map((c, id) =>
						<div className={s.link_container}>
							<NavLink key={id} to={`/train/${c.link}`} className={s.link} activeClassName={s.activeLink}> {c.name}</NavLink>
						</div>
					)}
					<div className={s.link_container}>
					<NavLink to={'/card'} className={s.link} activeClassName={s.activeLink}> Add card</NavLink>
					</div>
				</div>
				<div>
					footer
				</div>
			</div>

		</div>
	)
}
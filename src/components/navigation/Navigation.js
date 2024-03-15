import './Navigation.css';

function Navigation() {
	return (
		<div className='navigation'>
			<ul className='navigation__list'>
				<li className='navigation__item'>Обо мне</li>
				<li className='navigation__item'>Наставничество</li>
				<li className='navigation__item'>Мероприятия</li>
				<li className='navigation__item'>Кейсы</li>
				<li className='navigation__item'>Отзывы</li>
				<li className='navigation__item'>Контакты</li>
			</ul>
		</div>
	);
}

export default Navigation;
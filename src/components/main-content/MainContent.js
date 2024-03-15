import './MainContent.css';

function MainContent() {
	const openForm = () => {
		const appointmentForm = document.querySelector('.appointment-form-wrapper')
		appointmentForm.style.display = 'block'
	}

	return (
		<div className='main-content'>
			<h1 className='main-content__header'>Создаю условия<br />для вашего успеха</h1>
			<p className='main-content__description'>Когда ваше время и энергия лучше сфокусированы<br />стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий</p>
			<p className='main-content__description main-content__description--mobile'>Ваш успех зависит от ваших<br />действий</p>
			<button onClick={openForm} className='main-content__button main-content__button--mobile main-content__button--consultation-appointment'>
				<span className='main-content__button__name'>Записаться на консультацию</span>
				<span className='main-content__button__name main-content__button__name--mobile'>Записаться</span>
				<svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" stroke="#0B3461" stroke-width="2" />
				</svg>
			</button>
			<button onClick={openForm} className='main-content__button main-content__button--mobile main-content__button--free-consultation'>
				<span className='main-content__button__name'>Бесплатная консультация</span>
				<span className='main-content__button__name main-content__button__name--mobile'>Заказать звонок</span>
				<svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" stroke="#FFFFFF" stroke-width="2" />
				</svg>
			</button>
		</div>
	);
}

export default MainContent;
import Logo from '../logo/Logo';
import './AppointmentForm.css';

function AppointmentForm() {
	const sumbitForm = (e) => {
		e.preventDefault()
		const form = document.querySelector('.appointment-form')
		const formSumbitWrapper = document.querySelector('.form-sumbit-wrapper')

		form.style.display = 'none'
		formSumbitWrapper.style.display = 'flex'
	}

	const closeForm = () => {
		const formWrapper = document.querySelector('.appointment-form-wrapper')
		const form = document.querySelector('.appointment-form')
		const formSumbitWrapper = document.querySelector('.form-sumbit-wrapper')

		formWrapper.style.display = 'none'
		form.style.display = 'flex'
		form.reset()
		formSumbitWrapper.style.display = 'none'
	}

	return (
		<div className='appointment-form-wrapper'>
			<div className='appointment-form-blur' />
			<form onSubmit={sumbitForm} action='https://echo.htmlacademy.ru/courses' method='post' className='appointment-form'>
				<h2 className='appointment-form__header'>Закажите<br />обратный звонок</h2>
				<label className='appoinment-form__label'>
					<input type='text' className='appoinment-form__input' placeholder='ИМЯ' name='name' required />
				</label>
				<label className='appoinment-form__label' name='phone'>
					<input type='text' className='appoinment-form__input appoinment-form__input--last' placeholder='ТЕЛЕФОН' name='phone' required />
				</label>
				<label className='appoinment-form__label control'>
					<input type='checkbox' className='control__checkbox' name='approval' required />
					<span className='control__mark' />
					<span className='control__description'>Согласен на сохранение и&nbsp;обработку персональных данных</span>
				</label>
				<button type='submit' className='appointment-form__submit-button'>
					<svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" stroke="#FFFFFF" stroke-width="2" />
					</svg>
					Заказать обратный звонок
				</button>
			</form>
			<button onClick={closeForm} type='button' className='appointment-form__close-button'>
				<svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="1.70711" y1="1.69865" x2="32.1127" y2="32.1042" stroke="white" stroke-opacity="0.8" stroke-width="2" />
					<line x1="1.29289" y1="31.6982" x2="31.6985" y2="1.29258" stroke="white" stroke-opacity="0.8" stroke-width="2" />
				</svg>
			</button>
			<div className='form-sumbit-wrapper'>
				<p className='form-sumbit-wrapper__header'>Спасибо<br />за заявку</p>
				<p className='form-sumbit-wrapper__description'>Я обязательно<br />cвяжусь с вами<br />в ближайшее время.</p>
				<div className='form-sumbit-wrapper__logo'>
					<Logo />
				</div>
			</div>
		</div>
	);
}

export default AppointmentForm;
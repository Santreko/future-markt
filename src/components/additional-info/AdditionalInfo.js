import './AdditionalInfo.css';
import { useEffect, useState } from 'react'
import date from 'date-and-time';


function AdditionalInfo() {

	const [summOfCurrentDate, setSummOfCurrentDate] = useState(0)

	const getSummOfCurrentDate = () => {
		const currentDate = date.format(new Date(), 'DDMMYYYY')
		const currentDateArray = currentDate.split('')
		let resultSumm = 0
		for (let number of currentDateArray) {
			resultSumm += +number
		}
		setSummOfCurrentDate(resultSumm)
	}

	const [GBPCourse, setGPBCourse] = useState(0)

	async function getGBPCourse() {
		const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
		const data = await response.json()
		const GBPCourse = Math.round(data.Valute.GBP.Value)
		setGPBCourse(GBPCourse)
	}

	useEffect(() => {
		getGBPCourse()
		getSummOfCurrentDate()
	}, [])

	return (
		<div className='additional-info'>
			<div className='additional-info__info-wrapper parameter'>
				<b className='parameter__value'>{summOfCurrentDate}</b>
				<p className='parameter__description'>техник для достижения целей</p>
				<p className='parameter__description parameter__description--mobile'>техники</p>
			</div>
			<div className='additional-info__info-wrapper parameter'>
				<b className='parameter__value'>{GBPCourse}</b>
				<p className='parameter__description'>увеличение личной продуктивности</p>
				<p className='parameter__description parameter__description--mobile'>продуктивности</p>
			</div>
		</div>
	);
}

export default AdditionalInfo;
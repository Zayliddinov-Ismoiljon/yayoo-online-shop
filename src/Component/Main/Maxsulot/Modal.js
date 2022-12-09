import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SubmitFunc from './SubmitFunc';

import './Modal.css';

export default function Example({ name }) {
	const [show, setShow] = useState(false);
  const [isClick, setIsClick] = useState(false);
	const [inputVal, setInputVal]= useState()

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = () => {
		setIsClick(true)
    setTimeout(() => {
      setIsClick(false)
    }, 10000);
	}


	return (
		<>
			<Button  variant='primary' onClick={handleShow}>
				Buyurtma berish
			</Button>
			{ isClick ? <div class='alert alert-warning text-info' id="alert" role='alert'>
				Buyurtma yuborildi tez orada siz bilan operatorlar bo'glanishadi 
			</div> : null}
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Buyurtma berish uchun formani to'ldiring</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h3>Maxsult nomi: iPhone 14pro</h3>
					<form className='form order-form'>
						<label className='form__label' htmlFor='name'>
							Ismingizni kiriting
							<input
								required
								type='text'
								name="name"
								placeholder='Name'
								className='form__input username'
							/>
						</label>
						<label  className='form__label' htmlFor='adress'>
							Manzilingizni kiriting
							<input
								required
								type='text'
								name="adress"
								placeholder='Adress'
								className='form__input user-adress'
							/>
						</label>
						<label  className='form__label' htmlFor='productname'>
							Maxsulot nomini kiriting
							<input
								required
								type='text'
								name="productname"
								placeholder='Product name'
								className='form__input product-name'
							/>
						</label>
						<label  className='form__label' htmlFor='tel'>
							Telefon nomeringizni kiriting
							<input
								required
								type='tel'
								name="tel"
								placeholder='Tel'
								className='form__input user-phonenumber'
							/>
						</label>
						<button type='submit' onClick={handleSubmit} className='submit-btn w-100'>
							Buyurtma berish
						</button>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
}

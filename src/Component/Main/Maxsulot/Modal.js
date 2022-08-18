import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Modal.css';

export default function Example({ name }) {
	const [show, setShow] = useState(false);
  const [isClick, setIsClick] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = () => {
		setIsClick(true)
    setTimeout(() => {
      setIsClick(false)
    }, 5000);
	}

	return (
		<>
			<Button  variant='primary' onClick={handleShow}>
				Buyurtma berish
			</Button>
			{ isClick ? <div class='alert alert-danger' id="alert" role='alert'>
				Buyurtma yuborildi
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
					<h3>Maxsult nomi: {name}</h3>
					<form className='form' action=''>
						<label className='form__label' htmlFor=''>
							Ismingizni kiriting
							<input
								required
								type='text'
								placeholder='Name'
								className='form__input'
							/>
						</label>
						<label className='form__label' htmlFor=''>
							Manzilingizni kiriting
							<input
								required
								type='text'
								placeholder='Adress'
								className='form__input'
							/>
						</label>
						<label className='form__label' htmlFor=''>
							Maxsulot nomini kiriting
							<input
								required
								type='text'
								placeholder='Product name'
								className='form__input'
							/>
						</label>
						<label className='form__label' htmlFor=''>
							Telefon nomeringizni kiriting
							<input
								required
								type='tel'
								placeholder='Tell'
								className='form__input'
							/>
						</label>
						<button type='submit' onClick={handleSubmit} className='submit-btn'>
							Buyurtma berish
						</button>
					</form>
				</Modal.Body>
				{/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer> */}
			</Modal>
		</>
	);
}

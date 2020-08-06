import React, { useState } from 'react'
import '../styles/Order.css'
import emailjs from 'emailjs-com';
import { userID, template, serviceId } from '../config/keys'

const PRICE = 1390;

const Order = ({ numberOfItems, setNumberOfItems, orderRef }) => {
  const initialUserData = { fullName: '', email: '', phoneNumber: '', address: '' }
  const [userData, setUserData] = useState(initialUserData)
  const [isOrdering, setIsOrdering] = useState(false)

  const onChange = e => {
    const { name, value } = e.target
    if (name === 'numOfItems' && value > 0) {
      setNumberOfItems(parseInt(value))
      return
    }
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsOrdering(true)
    const { fullName, phoneNumber, address } = userData
    if (!fullName.trim() || !phoneNumber.trim() || !address.trim()) {
      alert('Sva obavezna polja moraju biti popunjena')
      setIsOrdering(false)
      return
    }

    const data = {...userData, numberOfItems}

    emailjs.send(serviceId, template, data, userID)
      .then((result) => {
        setIsOrdering(false)
        alert(`Uspešno ste naručili ${numberOfItems} ${numberOfItems === 1 ? 'sekač' : 'sekača'} lubenice. Uskoro ćete dobiti email ili sms o potvrdi narudžbine`)
        setUserData(initialUserData)
        setNumberOfItems(1)
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div
      className={'orderContainer'}
      ref={orderRef}
    >
      <div className='orderTitle'>Naruči</div>
      <div className='orderGreenBottom' />
      <form className={'content'}>
        <input
          className={'input'}
          onChange={onChange}
          name={'fullName'}
          placeholder={'Ime i prezime*'}
          value={userData.fullName}
        />
        <input
          type={'email'}
          className={'input'}
          onChange={onChange}
          name={'email'}
          placeholder={'Email'}
          value={userData.email}
        />
        <input
          className={'input'}
          onChange={onChange}
          name={'address'}
          placeholder={'Adresa*'}
          value={userData.address}
        />
        <input
          className={'input'}
          onChange={onChange}
          name={'phoneNumber'}
          placeholder={'Broj telefona*'}
          value={userData.phoneNumber}
        />
        <input
          type={'number'}
          className={'input'}
          onChange={onChange}
          name={'numOfItems'}
          placeholder={'Količina'}
          value={numberOfItems}
        />
        {isOrdering ? (
          <input
            type={'submit'}
            value={'Slanje u toku...'}
            className={'buttonDisabled centered'}
            onClick={e => e.preventDefault()}
          />
         ) : (
          <input
            type={'submit'}
            value={'Naruči'}
            className={'button centered'}
            onClick={handleSubmit}
          />
        )}
      </form>
      <div className='totalOrder'>
        <div className='totalOrderText'>
          {`Ukupno: ${numberOfItems * PRICE} rsd + troškovi dostave`}
        </div>
      </div>
    </div>
  )
}

export default Order

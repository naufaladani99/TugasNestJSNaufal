import React, { useState } from 'react'
import LocationApi from '../../api/LocationApi'

export default function FormLocationApi(props) {
    const [values, setValues] = useState({
        locationId: undefined,
        streetAddress: undefined,
        postalCode: undefined,
        city: undefined,
        stateProvince: undefined,
        country: undefined
    })
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            locationId: (values.locationId),
            streetAddress: (values.streetAddress),
            postalCode: (values.postalCode),
            city: (values.city),
            stateProvince: (values.stateProvince),
            country: (values.country)
        }
        await LocationApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    return (
        <div>
            <h2>Add Location</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Location ID : </label>
                    <input type="text" placeholder='Location ID' onChange={HandleChange('locationId')}></input>
                </div>
                <div>
                    <label>Street Address : </label>
                    <input type="text" placeholder='Street Address' onChange={HandleChange('streetAddress')}></input>
                </div>
                <div>
                    <label>Postal Code : </label>
                    <input type="text" placeholder='Postal Code' onChange={HandleChange('postalCode')}></input>
                </div>
                <div>
                    <label>City : </label>
                    <input type="text" placeholder='City' onChange={HandleChange('city')}></input>
                </div>
                <div>
                    <label>State Province : </label>
                    <input type="text" placeholder='State Province' onChange={HandleChange('stateProvince')}></input>
                </div>
                <div>
                    <label>Country : </label>
                    <input type="text" placeholder='Country' onChange={HandleChange('country')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
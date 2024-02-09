import React from 'react'

export default function Register() {
  return (
    <form>
        <div>
            <label htmlFor='firstname'>First name</label>
            <input type='text' id='firstname' placeholder='First Name'/>
        </div>
        <div>
            <label htmlFor='lastname'>Last name</label>
            <input type='text' id='lastname' placeholder='Last name'/>
        </div>
        <div>
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' placeholder='e-mail'/>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='password'/>
        </div>
        <div>
            <label htmlFor='country'>Country</label>
            <input type='text' id='country' placeholder='country'/>
        </div>
        <div>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' placeholder='city'/>
        </div>
        <button type='submit'>Register</button>
    </form>
  )
}

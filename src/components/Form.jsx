import { useState } from 'react'
import Swal from 'sweetalert2'


function Form() {
    
    const [ user, setUser ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    
    const { firstName, lastName, email, password } = user
    
    const handleSubmit = e => {
        e.preventDefault()
    
        if(Object.values(user).includes('')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are mandatory',
              })
            return
        }

        Swal.fire({
            icon: 'success',
            title: 'You have been successfully registered',
            showConfirmButton: false,
            timer: 1500
          })

        localStorage.setItem('user', JSON.stringify(user))
    }

  return (
    <div className="my-8 flex flex-col justify-center items-center">
        <div className="w-full py-6 px-12 bg-info rounded-lg shadow-[0_4px_1px_1px_rgba(0,0,0,0.2)]">
            <p className="text-white text-center font-semibold">
            Try it free 7 days <span className="text-white/75 font-normal">then $20/mo. thereafter</span> 
            </p>
        </div>
        <form 
        className="bg-white rounded-lg p-5 md:p-10 my-6 shadow-[0_4px_1px_1px_rgba(0,0,0,0.2)]"
        onSubmit={handleSubmit}
        >

            <label htmlFor="firstName"></label>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" className="p-4 my-3 border-dark/25 border rounded-md w-full placeholder-dark placeholder-font-bold focus:outline-none focus:border-info focus:ring-1 focus:ring-info" 
            value={firstName}
            onChange={(e) => setUser({...user, firstName: e.target.value})}
            />

            <label htmlFor="lastName"></label>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="p-4 my-3 border-dark/25 border rounded-md w-full placeholder-dark placeholder-font-bold focus:outline-none focus:border-info focus:ring-1 focus:ring-info" 
            value={lastName}
            onChange={(e) => setUser({...user, lastName: e.target.value})}
            />

            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="Email Address" className="p-4 my-3 border-dark/25 border rounded-md w-full placeholder-dark placeholder-font-bold focus:outline-none focus:border-info focus:ring-1 focus:ring-info" 
            value={email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            />

            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder='Password' className="p-4 my-3 border-dark/25 border rounded-md w-full placeholder-dark placeholder-font-bold focus:outline-none focus:border-info focus:ring-1 focus:ring-info" 
            value={password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            />

            <button 
            type="submit" 
            className="p-4 my-3 rounded-md w-full uppercase bg-secondary text-white font-semibold shadow-[0_4px_1px_1px_rgba(42,162,110,0.9)] hover:opacity-80 transition ease-in duration-300"
            >
            Claim your free trial
            </button>

            <p className="text-dark/50 text-xs text-center leading-1 px-6 py-2">
            By clicking the button, you are agreeing to our <a target="_blank" href="#" className="text-primary font-bold">Terms and Services</a> 
            </p>


        </form>
    </div>
  )
}

export default Form
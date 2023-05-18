import {useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/UserContext';

const Register = () => {
  const [error, setError] = useState('')
  const {createUser,updateName} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSignUp =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password);
    form.reset();
    if(password.length < 6){
      setError('Please password provide at lest 6 character.')
      return;
    }
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      navigate('/home')
      toast.success('Sign up successful')
      updateName(name)
      .then(()=>{
        console.log('Name update successful')
      })
      .catch(error=>{
        toast.error(error.message)
      })
    })
    .catch(error=>{
      setError(error.message)
    })

  };


  return (
    <div className='flex justify-center items-center pt-8 mb-5'>
    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-sky-300'>
      <div className='mb-8 text-center'>
        <h1 className='my-3 text-4xl font-bold'>Register</h1>
        <p className='text-sm text-black font-semibold'>Create a new account</p>
      </div>
      <form onSubmit={handleSignUp}
        noValidate=''
        action=''
        className='space-y-12 ng-untouched ng-pristine ng-valid'
      >
        <div className='space-y-4'>
          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-semibold'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter Your Name Here'
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
              data-temp-mail-org='0'
              required
            />
          </div>
          <div>
                <label htmlFor='email' className='block mb-2 text-sm font-semibold'>
                  Photo Url
                </label>
                <input
                  type='text'
                  name='photo'
                  id='name'
                  placeholder='Enter Your Name Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                  required
                />
              </div>
          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-semibold'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter Your Email Here'
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
              data-temp-mail-org='0'
              required
            />
          </div>
          <div>
            <div className='flex justify-between mb-2'>
              <label htmlFor='password' className='text-sm font-semibold'>
                Password
              </label>
            </div>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='*******'
              className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
              required
            />
            <p className='text-sm font-bold mt-2 text-red-600'>{error}</p>
          </div>
        </div>
        <div className='space-y-2'>
          <div>
            <button
              type='submit'
              className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div className='flex items-center pt-4 space-x-1'>
        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
      </div>
      <p className='px-6 text-sm text-center text-black'>
        Already have an account yet?{' '}
        <Link to='/login' className='hover:underline text-black font-semibold'>
          Sign In
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Register;

import { useState } from 'react';
import { useRouter } from 'next/router';
import Input from '@/components/global/Input';
import Button from '@/components/global/Button';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, givenName, familyName }),
      });

      console.log(JSON.stringify({ username, password, givenName, familyName }));
      if (!response.ok) {
        throw new Error('Registration failed');
      }

      window.location.href = '/app';
    } catch (err) {
      setError(err.message || 'Unknown error');
    }
  };

  return (
      <section className='flex flex-col w-100 h-screen justify-center items-center gap-8'>
        <h1 className='text-xl font-semibold'>AEYEBOX</h1>
        <form onSubmit={handleSubmit} className='flex flex-col p-8 gap-4 rounded-xl bg-[#DFECF5]'>
          <Input 
            inputName='email' 
            inputType='email' 
            labelName='Email' 
            inputValue={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required={true} 
          />
          <Input 
            inputName='password' 
            inputType='password' 
            labelName='Password' 
            inputValue={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required={true} 
          />
          <Input 
            inputName='givenName' 
            inputType='text' 
            labelName='Given Name' 
            inputValue={givenName} 
            onChange={(e) => setGivenName(e.target.value)} 
            required={true} 
          />
          <Input 
            inputName='familyName' 
            inputType='text' 
            labelName='Family Name' 
            inputValue={familyName} 
            onChange={(e) => setFamilyName(e.target.value)} 
            required={true} 
          />

          <Button text={"Sign Up"} classDiv={"mt-8"} />
          <div className='flex w-100 justify-center'>
            <a href="sign-in" className="text-sm text-[#07314a]">Already an user? Click here.</a>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </section>
  );
}

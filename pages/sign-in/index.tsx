import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/global/Button';
import Input from '@/components/global/Input';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
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
        <Input inputName='email' inputType='email' labelName='Email' inputValue={email} onChange={(e) => setEmail(e.target.value)} required={true} />
        <Input inputName='password' inputType='password' labelName='Password' inputValue={password} onChange={(e) => setPassword(e.target.value)} required={true} />
        <Button text={"Sign In"} classDiv={"mt-8"} />
        <div className='flex w-100 justify-center'>
          <a href="sign-up" className="text-sm text-[#07314a]">New user? Click here.</a>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </section>
  );
}

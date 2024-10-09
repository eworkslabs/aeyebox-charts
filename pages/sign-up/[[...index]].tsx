import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp 
        signInUrl="/sign-in"
        fallbackRedirectUrl="/app"
        appearance={{
          elements: {
            formButtonPrimary: 'bg-[#cfe600] text-[#07314a] border-none',
          },
        }} 
      />
    </div>
  )
}
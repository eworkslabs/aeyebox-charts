import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn 
        signUpUrl="/sign-up"
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
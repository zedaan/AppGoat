'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'
import { CardContent, CardFooter } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useTransition } from 'react'
import { Button } from './ui/button'
import { Loader2, Router } from 'lucide-react'
import Link from 'next/link'

type Props = {
  type: 'login' | 'signUp'
}

function AuthForm({ type }: Props) {
  const isLoginForm = type === 'login'
  const isSignUpForm = type === 'signUp'

  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async() => {
      const email = formData.get('email') as string
      const password = formData.get('password') as string

      let errorMessage;
      let title;
      let description;
      if(isLoginForm) {
        errorMessage = (await LoginAction({ email, password })).errorMessage;
        title = 'Sign Up';
        description = 'You have been sign Up successfully.';
      } else {
        errorMessage = (await SignUpAction({ email, password })).errorMessage;
        title = 'Signed Up';
        description = 'Check your email for conformation link.';
      }
      if (!errorMessage) {
        toast({
          title,
          description,
          variant: 'success',
        });
        router.replace("/")
      } else {
        toast({
          title: 'Error',
          description: errorMessage,
          variant: 'destructive',
        });
      }
    }
  )};

  return (
    <form action={handleSubmit}>
      <CardContent className='grid w-full items-center gap-4'>
        <div className='flex flex-col space-y-1.5'>
          <Label htmlFor='email'>Email</Label>
              <Input 
              id='email' 
              name='email'
              type='email' 
              placeholder='Enter your Email' 
              required
              disabled= {isPending}
            />
        </div>
        <div className='flex flex-col space-y-1.5'>
          <Label htmlFor='password'>Password</Label>
              <Input 
              id='password' 
              name='password'
              type='password' 
              placeholder='Enter your Password' 
              required
              disabled= {isPending}
            />
        </div>
      </CardContent>
      <CardFooter className='mt-4 flex flex-col gap-6'>
        <Button className='w-full'>
          {isPending ? (
            <Loader2 className='animate-spin' />
            ) : isLoginForm ? (
              'Login'
              ) : (
                'Sign Up'
            )}
        </Button>
        <p className='text-xs'>
            {isLoginForm 
            ? "Don't have an account?"
            :  "Already have an account?"} {" "}
          <Link
            href={isLoginForm ? '/sign-up' : '/login'}
            className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : 
            ""}`}    
          >
            {isLoginForm ? 'Sign Up' : 'Login'}
          </Link>
        </p>
      </CardFooter> 
    </form>
  )
}

export default AuthForm
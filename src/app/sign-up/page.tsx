import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import AuthForm from '@/components/AuthForm'

function SignUpPage() {
  return (
    <div className='flex flex-1 flex-col items-center'>
      <Card className='w-full max-w-md'>
        <CardContent>
          <CardHeader className='mb-4'>
            <CardTitle className='text-center text-3xl font-semibold'>Sign Up</CardTitle>
              <CardDescription className='text-center text-sm text-muted-foreground'>
                Enter your credentials to access your account.
              </CardDescription>
          </CardHeader>
          <AuthForm type="signUp" />
        </CardContent>
      </Card>  
    </div>
  )
}

export default SignUpPage
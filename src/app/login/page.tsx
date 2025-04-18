import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import AuthForm from '@/components/AuthForm'

function LoginPage() {
  return (
    <div className='flex flex-1 flex-col items-center'>
      <Card className='w-full max-w-md'>
        <CardContent>
          <CardHeader className='mb-4'>
            <CardTitle className='text-center text-3xl font-semibold'>Login</CardTitle>
              <CardDescription className='text-center text-sm text-muted-foreground'>
                Please add your credentials to access your account.
              </CardDescription>
          </CardHeader>
          <AuthForm type="login" />
        </CardContent>
      </Card>  
    </div>
  )
}

export default LoginPage
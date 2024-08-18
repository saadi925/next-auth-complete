"use client"
import { Form, FormFeedback, FormField, FormItem, FormLabel, FormControl } from '@repo/ui/components/form'
import React, {useState, useTransition} from 'react'
import { useResetPassword } from '@/hooks/auth/useForgotPassword'
import { z } from 'zod';
import { ResetPasswordSchema } from '@/schemas';
import { Input } from '@repo/ui/components/input';
import { cn } from '@repo/ui/lib/utils';
import {  EyeIcon, EyeOff } from 'lucide-react'
import { resetPasswordAction } from '@/lib/auth-actions/forgot-password';
import GoBack from '@/components/auth-components/GoBack';
import { Button } from '@repo/ui/components/button';
export default function NewPasswordForm({token} : {
    token?: string
}) {
  const [showPassword ,setShowPassword] = useState(false)
 const form = useResetPassword();
 const [message, setMessage] = React.useState<{
    type: 'error' | 'success';
    message: string
  }>({
    type: 'error',
    message: ''
  })
  const [isPending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof ResetPasswordSchema>) => {
    setMessage({type : 'error', message: ''})
   if (!token) {
    setMessage({
      type: 'error',
      message: 'Invalid token'
    })  
    return 
  }
    startTransition(async () => {
      const res = await resetPasswordAction(token , data);
      setMessage({
        type: res.success ? "success" : "error",
        message: res.message
      })
    });

  }
    return (
        <>
        <GoBack />
        <h2 className="text-2xl font-bold mb-2">Reset Your Password</h2>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
            control={form.control}
            name={"password"}
            render={({ field }) => (
              <FormItem >
                <FormLabel>
                  Password
                </FormLabel>
                <FormControl >
                  <div className='relative' >
                    <Input disabled={isPending} className={cn(``)} placeholder='********' type={showPassword ?"text" :"password"} {...field} />
                   <span className={cn(`top-2 z-50 hover:text-sky-500 cursor-pointer
         right-2 absolute`)} onClick={()=> setShowPassword(!showPassword)}>
                   {!showPassword ? <EyeIcon /> : <EyeOff  />  }
                   </span>
                  </div>
                </FormControl>
                <FormFeedback type="error" message={form.formState.errors.password?.message} />
              </FormItem>
            )}
          />
                    <FormField
            control={form.control}
            name={"confirmPassword"}
            render={({ field }) => (
              <FormItem >
                <FormLabel>
                  Confirm Password
                </FormLabel>
                <FormControl >
                  <div className='relative' >
                    <Input disabled={isPending} className={cn(``)} placeholder='********' type={showPassword ?"text" :"password"} {...field} />
                   <span className={cn(`top-2 z-50 hover:text-sky-500 cursor-pointer
         right-2 absolute`)} onClick={()=> setShowPassword(!showPassword)}>
                   {!showPassword ? <EyeIcon /> : <EyeOff  />  }
                   </span>
                  </div>
                </FormControl>
                <FormFeedback type="error" message={form.formState.errors.confirmPassword?.message} />
              </FormItem>
            )}
          />
         {message &&  <FormFeedback type={message.type} message={message.message} />}
          <Button className={cn(`mt-2 w-full disabled:bg-gray-600`)} type='submit' disabled={isPending} >Reset Password</Button>
      </form>
      </Form>
    </>
  )
}

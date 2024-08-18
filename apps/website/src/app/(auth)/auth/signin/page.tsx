'use client'
import * as z from 'zod';
import React, {  useState, useTransition } from 'react';
import Link from 'next/link';
import GoBack from '@//components/auth-components/GoBack';
import { MailIcon, EyeIcon, EyeOff } from 'lucide-react'
import {
  useSignIn
} from '@//hooks/auth/useSignIn'
import { Form, FormControl, FormField, FormItem, FormLabel, FormFeedback } from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Button } from '@repo/ui/components/button';
import { LoginSchema } from '@//schemas';
import { cn } from '@repo/ui/lib/utils';


import { signInAction } from '@/lib/auth-actions/signin-action';
import AuthProvidersCTA from '@//components/auth-components/AuthProvidersCTA';
const SignInForm: React.FC = () => {
  // sign in on the client with a provider
  const [showPassword ,setShowPassword] = useState(false)
  const form = useSignIn();
  const [message, setMessage] = React.useState<{
    type: 'error' | 'success';
    message: string
  }>({
    type: 'error',
    message: ''
  })
  const [isPending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      const res = await signInAction(data);
      setMessage({
        type: res.success ? "success" : "error",
        message: res.message
      })
    });

  }
  return (
    <>
      <GoBack />
      <h2 className="text-2xl font-bold mb-2">Sign In to Continue</h2>
      <Form  {...form} >
        <form className='flex flex-col gap-2' onSubmit={form.handleSubmit(onSubmit)}  >
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem >
                <FormLabel>
                  Email
                </FormLabel>
                <FormControl>
                  <div className="relative ">
                    <Input disabled={isPending} placeholder='Email' type='email' {...field} />
                    <MailIcon className={cn(`top-2 right-2 absolute`)} />
                  </div>
                </FormControl>
                <FormFeedback type="error" message={form.formState.errors.email?.message} />
              </FormItem>
            )}
          />
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
          <FormFeedback
            type={message.type}
            message={message.message}
          />

            <Link className='text-sm text-gray-500' href={'/auth/forgot-password'}>
              Forgot Password?
            </Link>
          <Button disabled={isPending} type='submit' className='w-full'>
            Sign In
          </Button>
        </form>
        <p className='mt-2'>
          <Link className=' mr-2' href={'/auth/signup'}>
            Create an Account!
          </Link>
          <span className='opacity-70'>
            if you don't have one.
          </span>
        </p>
      </Form>
      <AuthProvidersCTA />
    </>
  );
};

export default SignInForm;

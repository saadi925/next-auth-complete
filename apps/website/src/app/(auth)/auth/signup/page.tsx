'use client'
import * as z from 'zod';
import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import GoBack from '@//components/auth-components/GoBack';
import { MailIcon, Lock, User, EyeIcon, EyeOff } from 'lucide-react'
import {
  useSignUp
} from '@//hooks/auth/useSignup'
import { Form, FormControl, FormField, FormItem, FormLabel, FormFeedback } from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Button } from '@repo/ui/components/button';
import { SignupSchema } from '@//schemas';
import { cn } from '@repo/ui/lib/utils';
import { signUpAction } from '@/lib/auth-actions/signup-action';
import AuthProvidersCTA from '@//components/auth-components/AuthProvidersCTA';
const SignUpForm: React.FC = () => {
  const form = useSignUp();
  const [showPassword ,setShowPassword] = useState(false)
  const [message, setMessage] = React.useState<{
    type: 'error' | 'success';
    message: string
  }>({
    type: 'error',
    message: ''
  })
  const [isPending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof SignupSchema>) => {
    startTransition(async () => {
      const res = await signUpAction(data);
      setMessage({
      type : res.success ? "success": "error",
      message : res.message
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
            name={"name"}
            render={({ field }) => (
              <FormItem >
                <FormLabel>
                  Name
                </FormLabel>
                <FormControl>
                  <div className="relative ">
                    <Input disabled={isPending} placeholder='Name' type='text' {...field} />
                    <User className={cn(`top-2 right-2 absolute`)} />
                  </div>
                </FormControl>
                <FormFeedback type="error" message={form.formState.errors.name?.message} />
              </FormItem>
            )}
          /><FormField
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
         {message &&  <FormFeedback
            type={message.type}
            message={message.message}
          />}


          <Button disabled={isPending} type='submit' className='w-full'>
            Sign Up
          </Button>
        </form>
        <p className='mt-2'>
          <Link className=' mr-2 text-sm underline' href={'/auth/signin'}>
           Aleady Have an Account?
          </Link>
        </p>
    
      </Form>
      <AuthProvidersCTA />
    </>
  );
};

export default SignUpForm;

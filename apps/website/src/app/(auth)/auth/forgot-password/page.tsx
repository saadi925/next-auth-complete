"use client"
import { Form, FormFeedback, FormField, FormItem, FormLabel, FormControl } from '@repo/ui/components/form'
import React, {useTransition} from 'react'
import { useForgotPassword } from '@//hooks/auth/useForgotPassword'
import { z } from 'zod';
import { ForgotPasswordSchema } from '@//schemas';
import { Input } from '@repo/ui/components/input';
import { cn } from '@repo/ui/lib/utils';
import { forgotPasswordAction } from '@/lib/auth-actions/forgot-password';
import GoBack from '@//components/auth-components/GoBack';
import { Button } from '@repo/ui/components/button';
export default function page() {

 const form = useForgotPassword();
 const [message, setMessage] = React.useState<{
    type: 'error' | 'success';
    message: string
  }>({
    type: 'error',
    message: ''
  })
  const [isPending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof ForgotPasswordSchema>) => {
  setMessage({type : 'error', message: ''})

    startTransition(async () => {
      const res = await forgotPasswordAction(data);
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
            name={"email"}
            render={({ field }) => (
              <FormItem >
                <FormLabel>
                  Email
                </FormLabel>
                <FormControl >
                  <div className='relative' >
                    <Input disabled={isPending} className={cn(``)} placeholder='xyz@yourmail.com' type={"email"} {...field} />
       
                  </div>
                </FormControl>
                <FormFeedback type="error" message={form.formState.errors.email?.message} />
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

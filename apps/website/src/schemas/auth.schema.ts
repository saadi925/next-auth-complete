import * as z from 'zod';
export const ForgotPasswordSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    })
    });

export const ResetPasswordSchema = z.object({
    password: z.string().min(7, {
        message: 'Password is required'
    }),
    confirmPassword: z.string().min(7, {
        message: 'Password is required'
    })
    });

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(1, {
        message: 'Password is required'
    })
    });

export const SignupSchema = z.object({
    name: z.string(),
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(7, {message: 'Password is required'}),
    });


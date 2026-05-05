'use client';

import { AuthLayout } from '@/components/AuthLayout/AuthLayout';
import { loginUser } from '@/services/api/auth';
import { LoginFormData } from '@/types/auth';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type ErrorResponse = {
  message?: string;
};

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginUser(data);
      console.log(response);
      router.push('/cart');
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse>(error)) {
        const message =
          error.response?.data?.message || error.message || 'Login failed';

        toast.error(message);
      } else {
        toast.error('Unexpected error');
      }
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email format',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Log in</button>
      </form>
      <Link href="/register">Don't have an account?</Link>
    </AuthLayout>
  );
}

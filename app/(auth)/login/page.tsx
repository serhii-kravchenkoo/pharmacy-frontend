'use client';

import { AuthLayout } from '@/components/AuthLayout/AuthLayout';
import { api } from '@/services/api/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await api.post('/api/user/login', data);
      console.log(response.data);
      router.push('/');
    } catch (error: any) {
      console.error(error.response?.data || error.message);
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

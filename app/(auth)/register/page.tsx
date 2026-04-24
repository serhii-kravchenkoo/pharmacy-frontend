'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { AuthLayout } from '@/components/AuthLayout/AuthLayout';

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="User Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email address"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone number"
            {...register('phone', { required: 'Phone is required' })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>

      <Link href="/login">Already have an account? </Link>
    </AuthLayout>
  );
}

import { ReactNode } from 'react';
import { SharedLayout } from '@/components/SharedLayout/SharedLayout';

export default function MainLayout({ children }: { children: ReactNode }) {
  return <SharedLayout>{children}</SharedLayout>;
}

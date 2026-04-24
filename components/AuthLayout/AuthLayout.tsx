import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <div>
      <div>
        <h1>
          Your medication, delivered Say goodbye to all your healthcare worries
          with us
        </h1>
      </div>

      <div>{children}</div>
    </div>
  );
};

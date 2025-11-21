'use client';

import { cn } from '@/lib/utils';

type AuthTitleProps = {
  title: string;
  description: string;
  className?: string;
};

const AuthTitle = ({ title, description, className }: AuthTitleProps) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 text-center', className)}>
      <h1 className="font-rubik text-2xl font-semibold md:text-3xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default AuthTitle;

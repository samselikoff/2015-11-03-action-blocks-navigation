'use client';

import { useFormStatus } from 'react-dom';

export function FormStatus({ pendingLabel }: { pendingLabel: string }) {
  const { pending } = useFormStatus();

  return pending ? pendingLabel : null;
}

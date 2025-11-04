'use client';

import { FormStatus } from './FormStatus';

export default function Home() {
  return (
    <form
      action={async () => {
        await new Promise((resolve) => setTimeout(resolve, 4_000));
      }}
    >
      <button className="border p-2" type="submit">
        Form action
        <FormStatus pendingLabel=" (Running...)" />
      </button>
    </form>
  );
}

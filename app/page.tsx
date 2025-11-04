'use client';

import { useState } from 'react';
import { sleepServerFunction } from './actions';
import { FormStatus } from './FormStatus';

export default function Home() {
  const [pending, setPending] = useState(false);

  return (
    <div className="">
      <div>
        <button
          onClick={async () => {
            setPending(true);
            await sleepServerFunction();
            setPending(false);
          }}
          className="border p-2"
        >
          Button onClick {pending && '(Running...)'}
        </button>
      </div>

      <div className="mt-2">
        <form action={sleepServerFunction}>
          <button className="border p-2" type="submit">
            Form action
            <FormStatus pendingLabel=" (Running...)" />
          </button>
        </form>
      </div>
    </div>
  );
}

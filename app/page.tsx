import { sleepAction } from './actions';
import { FormStatus } from './FormStatus';

export default function Home() {
  return (
    <form action={sleepAction}>
      <button className="border p-2" type="submit">
        Form with sleepAction
        <FormStatus pendingLabel="(Running...)" />
      </button>
    </form>
  );
}

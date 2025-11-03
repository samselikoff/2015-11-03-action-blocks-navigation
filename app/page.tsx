import Link from 'next/link';
import { sleepAction } from './actions';

export default function Home() {
  return (
    <div>
      <p>
        <Link href="/about" className="underline">
          Link to about
        </Link>
      </p>

      <div className="mt-8">
        <form action={sleepAction}>
          <button className="border p-2" type="submit">
            Form with sleepAction
          </button>
        </form>
      </div>
    </div>
  );
}

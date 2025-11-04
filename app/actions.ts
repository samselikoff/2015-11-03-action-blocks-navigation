'use server';

export async function sleepServerFunction() {
  await new Promise((resolve) => setTimeout(resolve, 6_000));
}

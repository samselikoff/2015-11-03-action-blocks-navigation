'use server';

export async function sleepAction() {
  await new Promise((resolve) => setTimeout(resolve, 6_000));
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function joinWaitlist(email: string) {
  const d = await fetch(`${API_URL}/waitlist`, {
    body: JSON.stringify({ email }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
  const res = await d.json();
  if (!d.ok) throw new Error(res.message);
  return res;
}

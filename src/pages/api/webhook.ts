import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { variant, userAgent } = req.body;

    const deviceType = userAgent
      ? userAgent.includes('iPhone') || userAgent.includes('iPad')
        ? 'iOS'
        : userAgent.includes('Android')
        ? 'Android'
        : 'Other'
      : 'Unknown';

    const webhookResponse = await fetch(
      process.env.DISCORD_WEBHOOK_URL as string,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `variant: **${variant}** | device: **${deviceType}** | time: ${new Date().toISOString()}`,
        }),
      },
    );

    if (!webhookResponse.ok) {
      throw new Error('Discord webhook failed');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// This is a placeholder for a Vercel Serverless Function.
// In a real production environment, this function would securely call the X (Twitter) API
// using an API key stored as an environment variable (e.g., process.env.X_API_KEY).
// The frontend calls this endpoint, ensuring the API key is never exposed to the client.

// For demonstration purposes, we are returning mock data.

const MOCK_TRENDS = [
  { name: '#AIforGood', tweet_volume: 250000 },
  { name: 'QuantumComputing', tweet_volume: 180000 },
  { name: 'FutureOfWork', tweet_volume: 150000 },
  { name: 'SustainableTech', tweet_volume: 120000 },
  { name: 'ReactV19', tweet_volume: 95000 },
  { name: 'Web3Debate', tweet_volume: 78000 },
  { name: '#CybersecurityAwareness', tweet_volume: 65000 },
  { name: 'AppleEvent', tweet_volume: 500000 },
  { name: 'NextGenGaming', tweet_volume: 45000 },
  { name: 'MarsRover', tweet_volume: null },
];

export default async (req: any, res: any) => {
  // In a real implementation, you would add logic here to fetch from the X API:
  //
  // const X_API_KEY = process.env.X_API_KEY;
  // const response = await fetch('https://api.twitter.com/1.1/trends/place.json?id=1', {
  //   headers: {
  //     'Authorization': `Bearer ${X_API_KEY}`
  //   }
  // });
  // const data = await response.json();
  // res.status(200).json({ trends: data[0].trends });

  // For now, we return the mock data.
  res.status(200).json({ trends: MOCK_TRENDS });
};

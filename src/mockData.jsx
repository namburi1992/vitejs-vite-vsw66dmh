// File: src/mockData.js
const mockData = Array.from({ length: 50 }, (_, id) => {
  const offline = Math.random() < 0.3; // 30% chance of being offline
  return {
    id,
    ip: `192.168.1.${id + 1}`,
    name: `Camera ${id + 1}`,
    division: `Division ${1 + (id % 3)}`,
    store: `Store ${String.fromCharCode(65 + (id % 3))}`,
    encrypted: Math.random() < 0.5, // 50% chance of being encrypted
    offline, // offline status
    lastActive: offline
      ? null
      : new Date(Date.now() - Math.random() * 86400000).toISOString(), // Random last active time within the last 24 hours
  };
});
export default mockData;

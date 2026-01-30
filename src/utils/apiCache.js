export const fetchWithCache = async (url, cacheKey, durationInHours = 24) => {
    const now = new Date().getTime();
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const ageInHours = (now - timestamp) / (1000 * 60 * 60);

        if (ageInHours < durationInHours) {
            console.log(`[Cache] Returning cached data for ${cacheKey}`);
            return data;
        }
    }

    console.log(`[Cache] Fetching fresh data for ${cacheKey}`);
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: now }));
    return data;
};

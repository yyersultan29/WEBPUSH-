export const retryFetch = async (
  url: string,
  retries = 5,
  delay = 1000
): Promise<unknown> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.error(`Error attempt ${retries}`, e);

    if (retries <= 1) {
      throw new Error(`Retry ended: request failed after ${retries} attempts`);
    }

    // задержка перед новой попыткой
    await new Promise(res => setTimeout(res, delay));

    return retryFetch(url, retries - 1, delay);
  }
};

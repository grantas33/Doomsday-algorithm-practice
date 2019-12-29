const options = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true
};

const getHighScore = () => caches.open('highScore')
    .then((cache) => cache.match('value', options))
    .then(response => response.json())
    .then(parsed => parsed.value)
    .catch(() => 0);

const setHighScore = (score) => {
  caches.open('highScore')
      .then((cache) => cache.put('value', new Response(`{"value": "${score}"}`)));
};

export const storage = {
  getHighScore,
  setHighScore
};
import { fetchDataFilter } from './fetchApi.js';
import { renderCard, renderCards } from './render.js';
import { listenCardsGrid } from './detail.js';

export const setFilter = async (region) => {
  const data = await fetchDataFilter(region);
  if (data) {
    const cards = data.map((item) => renderCard(item));
    renderCards(cards);

    listenCardsGrid();
  } else {
    alert('No data found, please insert another text.');
  }
};

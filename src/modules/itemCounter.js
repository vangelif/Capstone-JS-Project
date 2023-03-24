const itemsCounter = (data, link) => {
  link.innerHTML = `Movies(${data.length})`;
  return data.length;
};

export default itemsCounter;

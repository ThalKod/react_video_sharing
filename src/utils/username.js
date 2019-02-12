const getInitial = (username) => {
  const match = username.match(/(\w)?\w*\s*(\w)?/);
  return match ? match.slice(1).join('').toUpperCase() : '';
};

export default getInitial;

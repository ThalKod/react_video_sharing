const getInitial = (username) => {
  const match = username.match(/(\w)?\w*\s*(\w)?/);
  return match ? match.slice(1).join('') : '';
};

export default getInitial;

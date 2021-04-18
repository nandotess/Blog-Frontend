const slugify = (title) => {
  return title.toLowerCase().replace(/\s+/g, '-').slice(0, 96);
};

export default slugify;

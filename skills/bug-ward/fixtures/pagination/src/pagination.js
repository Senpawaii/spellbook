function lastPage(total, perPage) {
  return Math.floor(total / perPage) + 1;
}

module.exports = { lastPage };

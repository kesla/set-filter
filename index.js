module.exports = (set, fn) => new Set(Array.from(set).filter(fn));

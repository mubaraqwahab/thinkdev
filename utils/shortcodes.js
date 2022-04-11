module.exports = {
  now: () => new Date().toISOString(),
  getenv: (var) => process.env[var],
}

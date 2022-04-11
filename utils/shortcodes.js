module.exports = {
  now: () => new Date().toISOString(),
  getenv: (variable, fallbackValue) => process.env[variable] || fallbackValue,
}

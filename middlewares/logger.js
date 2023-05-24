export function logger(req, res, next) {
  console.log("LOGGER is here");
  next();
}

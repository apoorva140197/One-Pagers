export function getQuery() {
  return window.location.search
    .slice(1)
    .split("&")
    .map(qStr => qStr.split("="))
    .reduce((acc, inc) => {
      acc[inc[0]] = inc[1];
      return acc;
    }, {});
}

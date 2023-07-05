// This function checks the filters we are trying to setup and clean
// those which are empty or forbidden
export const setupFilters = (baseUrl, filters, forbiddenFilters) => {
  areFiltersArray(filters);
  areFiltersEmpty(filters);
  areFiltersForbidden(filters, forbiddenFilters);
  return createUrlFromValidFilters(baseUrl, filters);
};

export const areFiltersArray = (filters) => {
  if (!Array.isArray(filters)) throw new TypeError("Filters must be an array");
};

export const areFiltersEmpty = (filters) => {
  if (filters.length === 0) throw new Error("No filters provided");
};

export const getFiltersArray = (filters) => {
  return Object.keys(filters);
};

export const areFiltersForbidden = (filters, forbiddenFilters) => {
  const filtersArray = filters.reduce((acc, filter) => {
    return [...acc, ...getFiltersArray(filter)];
  }, []);
  if (forbiddenFilters.some((filter) => filtersArray.includes(filter)))
    throw new Error("Forbidden filters provided");
};

export const createUrlFromValidFilters = (baseUrl, filters) => {
  const keyValuePairs = filters.reduce((acc, filter) => {
    const [key, value] = Object.entries(filter)[0];
    return [...acc, [key, value]];
  }, []);
  const url = keyValuePairs.reduce(
    (acc, [key, value]) => `${acc}${key}=${value}&`,
    baseUrl + "?"
  );
  return url.slice(0, -1);
};

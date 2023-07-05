import camelCase from "lodash/camelCase";

export const createStatsList = (stats) => {
   if (Array.isArray(stats)) {
      return stats.reduce((result, { title, value }) => {
         result[camelCase(title)] = value;

         return result;
      }, {});
   }
   return;
};
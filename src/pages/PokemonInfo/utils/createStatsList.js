import camelCase from "lodash/camelCase";

export const createStatsList = (stats) => {
   console.log(stats);
   if (Array.isArray(stats)) {
      return stats.reduce((result, { base_stat, stat }) => {
         result[camelCase(stat?.title)] = base_stat;

         return result;
      }, {});
   }
   return;
};
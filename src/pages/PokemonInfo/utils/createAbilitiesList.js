import { startCase } from "lodash";

export const createAbilitiesList = (abilities) => {
   if (Array.isArray(abilities)) {
      return abilities.reduce((result, { title, description }) => {
         result[startCase(title)] = description;

         return result;
      }, {});
   }
   return;
};
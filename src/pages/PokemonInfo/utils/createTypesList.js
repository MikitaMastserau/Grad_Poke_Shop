import startCase from "lodash/startCase";

export const createTypesList = (types) => {
   if (Array.isArray(types)) {
      return types.reduce((result, { type }) => {
         result.push(startCase(type.name));

         return result;
      }, []);
   }
   return;
};
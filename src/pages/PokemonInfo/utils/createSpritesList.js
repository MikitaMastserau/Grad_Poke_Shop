export const createSpritesList = (sprites) => {
   if (Object.prototype.toString.call(sprites) === "[object Object]") {
      const result = [];

      result.push(sprites.other["official-artwork"].front_default, sprites.front_default);

      return result;
   }
   return;
};
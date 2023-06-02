import { mainApiConfig } from "config/mainApi";

class CartService {
   static instance = new CartService();

   #baseUrl = "/cart";

   getItems() {
      return mainApiConfig.get(this.#baseUrl);
   };

   addItem(item) {
      return mainApiConfig.post(`${this.#baseUrl}/item`, item);
   };

   changeItem({ id, quantity }) {
      return mainApiConfig.patch(`${this.#baseUrl}/item`, { id, quantity })
   };

   deleteItem(id) {
      return mainApiConfig.delete(`${this.#baseUrl}/item/${id}`);
   };

   order({ customerId, totalPrice, itemsList }) {
      return mainApiConfig.post("/order", { customerId, totalPrice, itemsList });
   };

   getOrders() {
      return mainApiConfig.get("/order");
   };
};

export default CartService.instance;
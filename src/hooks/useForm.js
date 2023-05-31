import { useState, useCallback } from "react";

export const useForm = (initFormFields) => {
   const [form, setForm] = useState(initFormFields);

   const handleChange = useCallback(({ target }) => {
      const { name, value } = target;

      setForm((state) => ({
         ...state,
         [name]: value,
      }));
   }, []);

   const handleReset = useCallback(() => {
      setForm(initFormFields);
   }, [initFormFields]);

   return {
      form,
      handleChange,
      handleReset,
   };
};
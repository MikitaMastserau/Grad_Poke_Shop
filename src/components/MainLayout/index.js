import { Header } from "components/Header";

export const MainLayout = ({ children }) => {
   return (
      <div>
         <Header />
         {children}
      </div>
   );
};
import { Route, Routes } from "react-router-dom";

import { Title } from "components/Title";
import { SignUpContainer } from "pages/SignUp/containers/SignUpContainer";
import { SignInContainer } from "pages/SignIn/containers/SignInContainer";
import { PrivateRout } from "./PrivateRout";
import { PokemonsContainer } from "pages/Pokemons/containers/PokemonsContainer";
import { PokemonInfoContainer } from "pages/PokemonInfo/containers/PokemonInfoContainer";
import { HomeContainer } from "pages/Home/containers/HomeContainer";
import { CartContainer } from "pages/Cart/containers/CartContainer";
import { ProfileContainer } from "pages/Profile/containers/ProfileContainer";

import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
   return (
      <Routes>
         <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
         <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
         <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />

         <Route path={ROUTE_NAMES.POKEMONS} element={
            <PrivateRout>
               <PokemonsContainer />
            </PrivateRout>
         } />
         <Route path={ROUTE_NAMES.POKEMON_INFO} element={
            <PrivateRout>
               <PokemonInfoContainer />
            </PrivateRout>
         } />
         <Route path={ROUTE_NAMES.CART} element={
            <PrivateRout>
               <CartContainer />
            </PrivateRout>
         } />
         <Route path={ROUTE_NAMES.PROFILE} element={
            <PrivateRout>
               <ProfileContainer />
            </PrivateRout>
         } />

         <Route path="*" element={<Title title="ERROR 404. NOT FOUND" />} />
      </Routes>
   );
};
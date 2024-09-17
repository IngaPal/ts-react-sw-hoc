import { createContext } from "react";
import { defaultHero } from "./constants";
import { SWContextValue } from "./types";

export const SWContext = createContext<SWContextValue>({
    changeHero: (hero: string) => {console.log(hero)},
    hero: defaultHero
});
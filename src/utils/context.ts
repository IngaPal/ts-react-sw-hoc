import { createContext } from "react";
import { defaultHero } from "./constants";

type SWContextType = {
    hero: string;
    changeHero: (hero: string) => void;
};

export const SWContext = createContext<SWContextType>({
    hero: defaultHero,
    changeHero: () => {}
});
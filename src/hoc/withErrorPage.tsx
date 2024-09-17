import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { defaultHero, characters } from "../utils/constants";
import { SWContext } from "../utils/context";
import ErrorPage from "../components/ErrorPage";

type WithErrorPageProps = {
    heroId?: string;
    [key: string]: any;
}

export const withErrorPage = <P extends WithErrorPageProps>(
    WrappedComponent: React.ComponentType<P>
) => {
    return (props: Omit<P, 'heroId'>) => {
        const { heroId = defaultHero } = useParams<{ heroId?: string }>();
        const { changeHero } = useContext(SWContext);

        useEffect(() => {
            if (characters.hasOwnProperty(heroId)) {
                changeHero(heroId);
            } else {
                changeHero(defaultHero);
            }
        }, [heroId, changeHero]);

        if (!characters.hasOwnProperty(heroId)) {
            return <ErrorPage />;
        }

        return <WrappedComponent heroId={heroId} {...(props as P)} />;
    };
};
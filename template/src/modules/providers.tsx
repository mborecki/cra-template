import React from "react";
import { MainModuleProvider } from "./main";

const providersList: ((props: React.PropsWithChildren<any>) => JSX.Element)[] = [
    MainModuleProvider
]

const ModulesProviders = ({ children }: React.PropsWithChildren<{}>) => {
    return providersList.reduce((Prev, Next) => {
        return (
            <Next>
                {Prev}
            </Next>
        )
    }, (<>{children}</>))
}

export default ModulesProviders;

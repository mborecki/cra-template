import React from "react";
import { MainModuleProvider } from "./main";
import { TimeProvider } from "./main/hooks/use-now";

const providersList: React.FunctionComponent<{}>[] = [
    TimeProvider,
    MainModuleProvider
]

const ModulesProviders: React.FunctionComponent = ({ children }) => {
    return providersList.reduce((Prev, Next) => {
        return (
            <Next>
                {Prev}
            </Next>
        )
    }, (<>{children}</>))
}

export default ModulesProviders;

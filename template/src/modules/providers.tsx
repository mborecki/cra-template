import React from "react";
import { MainModuleProvider } from "./main";

const providersList: React.FunctionComponent<{}>[] = [
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

import React from "react";
import { DemoModuleProvider } from "./demo";

const providersList: React.FunctionComponent<{}>[] = [
    DemoModuleProvider
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

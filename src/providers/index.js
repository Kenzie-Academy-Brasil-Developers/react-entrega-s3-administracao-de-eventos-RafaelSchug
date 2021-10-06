import { ConfraternizationProvider } from "./confraternization";
import { WeedingProvider } from "./wedding";
import { GraduationProvider } from "./graduation";

const Providers = ({children}) => {
    return (
        <ConfraternizationProvider>
            <WeedingProvider>
                <GraduationProvider>
                    {children}
                </GraduationProvider>
            </WeedingProvider>
        </ConfraternizationProvider>
    )
}

export default Providers;
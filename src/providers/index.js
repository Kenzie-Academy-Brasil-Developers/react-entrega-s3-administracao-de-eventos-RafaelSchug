import { ConfraternizationProvider } from "./confraternization";
import { WeedingProvider } from "./wedding";
import { GraduationProvider } from "./graduation";
import { SearchProvider } from "./search";

const Providers = ({children}) => {
    return (
        <ConfraternizationProvider>
            <WeedingProvider>
                <GraduationProvider>
                    <SearchProvider>
                        {children}
                    </SearchProvider>
                </GraduationProvider>
            </WeedingProvider>
        </ConfraternizationProvider>
    )
}

export default Providers;
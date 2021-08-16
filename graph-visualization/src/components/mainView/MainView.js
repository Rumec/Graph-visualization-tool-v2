import {TopPanel} from "../topPanel/TopPanel";
import {GraphSection} from "../graphSection/GraphSection";

export const MainView = (props) => {
    return(
        <div>
            <TopPanel />
            <GraphSection />
        </div>
    )
}
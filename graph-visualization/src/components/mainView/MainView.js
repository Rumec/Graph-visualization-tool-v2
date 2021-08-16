import './MainView.css'

import {TopPanel} from "../topPanel/TopPanel";
import {GraphSection} from "../graphSection/GraphSection";
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
    name: 'main-view',
});

export const MainView = (props) => {
    return(
        <div {...classes()}>
            <TopPanel />
            <GraphSection />
        </div>
    )
}
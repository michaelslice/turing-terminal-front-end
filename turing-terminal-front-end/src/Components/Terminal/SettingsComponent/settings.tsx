import useDragger from "../DraggerComponent/dragger";

import "./settings.css"

const Settings: React.FC = () => {

    useDragger("pink-box");
    
    return <div id="pink-box" className="box"></div>
};
    
export default Settings
import React from "react";
import UpperHeader from "./upper-header";
import LowerHeader from "./lower-header";

const HeaderComponent: React.FC = () => {
    return (
        <div>
            <UpperHeader />
            <LowerHeader />
        </div>
    );
}

export { HeaderComponent };
export default HeaderComponent;

import React, {useState} from 'react';
import {MyGlobalContext} from "./index";

const Useconect = ({child}:any) => {
    const [copy,setCopy] = useState<any>(1)
    return (
        <MyGlobalContext.Provider value={{copy,setCopy}}>
            {child}
        </MyGlobalContext.Provider>
    );
};

export default Useconect;
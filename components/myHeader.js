import React from "react";
import {Header} from "react-native-elements";

const MyHeader= props =>{
    return(
        <Header
        centerComponent={{text:props.title, style:{color:"#FFF", fontSize:20, fontWeight:"bold" }}}
        backgroundColor="#C4CCF0"
        />
    )
}

export default MyHeader;
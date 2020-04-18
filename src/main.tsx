import * as React from "react";
import * as ReactDom from "react-dom";

function Main()
{
    return (<div>hello!</div>);
}

ReactDom.render(<Main />, document.getElementById("root"));
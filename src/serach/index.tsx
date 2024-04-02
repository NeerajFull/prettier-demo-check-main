import ReactDOM from "react-dom/client";
import React from "react";
import { SearchApp } from "./searchApp";

const root = ReactDOM.createRoot(document.getElementById("my-element")!);
root.render(
    <React.StrictMode>
        <SearchApp />
    </React.StrictMode >
);

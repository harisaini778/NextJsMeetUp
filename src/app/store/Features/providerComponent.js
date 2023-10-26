"use client"

import { Provider } from "react-redux";
import store from "../reduxStore";

function Providers({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Providers;

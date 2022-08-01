import {render as Renderopt,screen,fireEvent,waitForElementToBeRemoved,} from "@testing-library/react";
  import {Home} from "./components/Home";
  import * as React from "react";
  import { Provider } from "react-redux";
  import { configureStore } from "@reduxjs/toolkit";
  import reducers from "./Redux/reducers/productReducers";
  import axios from "axios";


// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

//Mock axios
jest.mock("axios");

//redux 
const render = (
    ui,
    {
    store = configureStore({
        reducer: reducers,
    }),
    ...renderOptions
    } = {}
) => {

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
return Renderopt(ui, { wrapper: Wrapper, ...renderOptions });
}

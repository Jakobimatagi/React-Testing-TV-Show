import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import App from "./App";

// mock the fetch with a fake version
jest.mock("./api/fetchShow");


// Test that app renders
test("App renders", async () => {
   await waitFor(() => render(<App />) )
})
// Stranger Things title and explanation text exists


// App fetches the data and displays data when user click season

import React from "react";
// eslint-disable-next-line import/no-internal-modules
import { createRoot } from "react-dom/client";

import { App } from "@/app";

import "./index.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

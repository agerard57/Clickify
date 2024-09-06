import React, { FC, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { LoadingScreen } from "@/pages/loadingScreen/LoadingScreen";
import { Providers } from "./Providers";
import { Router } from "./Router";

// TODO Make the links Link instead of <a>
export const App: FC = () => (
  <Providers>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerStyle={{ marginTop: "7vh" }}
      toastOptions={{
        duration: 5000,
      }}
    />
    <Suspense fallback={<LoadingScreen />}>
      <Router />
    </Suspense>
  </Providers>
);

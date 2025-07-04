import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
};

export default App;

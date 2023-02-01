import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./REDUX/STORE/store";
import router from "./ROUTERS/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </Provider>
    </div>
  );
}

export default App;

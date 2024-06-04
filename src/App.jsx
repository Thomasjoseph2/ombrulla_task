import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>

          <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

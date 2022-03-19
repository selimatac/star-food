import { Sidebar, Orders } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NewOrder, OrderList } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <div className="h-full flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="orders" element={<Orders />}>
            <Route path="list/:id" element={<OrderList />}></Route>
            <Route path="create" element={<NewOrder />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

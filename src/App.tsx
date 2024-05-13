import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./routes/Index";
import Error from "./routes/Error";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}

export default App;

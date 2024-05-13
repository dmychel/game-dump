import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./routes/Index";
import Error from "./routes/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

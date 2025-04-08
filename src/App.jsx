import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GiftProvider } from "./context/GiftContext";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";
import DetailsPage from "./pages/DetailsPage";
import EditPage from "./pages/EditPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <GiftProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </GiftProvider>
  );
}

export default App;

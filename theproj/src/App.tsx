import "./App.css";
import AboutPage from "./components/AboutPage";
import ArtworkListContent from "./components/ArtworkListContent";
import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import ArtworkContent from "./components/ArtworkContent";

const Root = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/artwork/:id" element={<ArtworkContent />} />
        <Route path="/" element={<ArtworkListContent />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

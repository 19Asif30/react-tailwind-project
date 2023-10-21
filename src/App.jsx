import {
  Routes,
  Route,
  Navigate,
  useRoutes,
  useLocation,
} from "react-router-dom";
import routes from "@/routes";
import "./App.css";
import { AppLayout } from "@/widgets/layout";

function App() {
  const appRoutes = useRoutes(routes);
  const { pathname } = useLocation();

  const cover = routes.find((item) => item.path === pathname);
  return (
    <>
      {cover !== undefined && cover.cover ? (
        <AppLayout routes={routes}>{appRoutes}</AppLayout>
      ) : (
        <div className="container-fluid">{appRoutes}</div>
      )}
    </>
  );
}

export default App;

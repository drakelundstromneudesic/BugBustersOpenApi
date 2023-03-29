import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultPage } from "./Pages/Default/DefaultPage";
import { NewSessionPage } from "./Pages/NewSession/NewSessionPage";
import { RecommendationPage } from "./Pages/Recommendation/RecommendationPage";
import { HOME_ROUTE, RECOMMENDATIONS_ROUTE } from "./Routes";

export const AppRouter = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={HOME_ROUTE} element={<DefaultPage />}>
        <Route path="" element={<NewSessionPage />} />
        <Route
          path={`${RECOMMENDATIONS_ROUTE}:id`}
          element={<RecommendationPage />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h2>404: page not found</h2>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

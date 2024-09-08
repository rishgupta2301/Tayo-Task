import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ChartsAndMapsPage from "./pages/ChartsAndMapsPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ErrorBoundary from "./components/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <div className="app">
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route path="/" element={<ContactPage />} />
                <Route
                  path="/charts-and-maps"
                  element={<ChartsAndMapsPage />}
                />
              </Routes>
            </QueryClientProvider>
          </div>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;

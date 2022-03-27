import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from './hooks';

const Home = lazy(() => import('./pages/'));
const Judge = lazy(() => import('./pages/JudgeComponent'));
const Success = lazy(() => import('./pages/SuccessComponent'));
const NotFound = lazy(() => import('./pages/NotFoundComponent'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/judge" exact element={<Judge />} />
          <Route path="/success" exact element={<Success />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

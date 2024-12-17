import { Route, Routes } from 'react-router';
import { routePaths } from '../config/route.config';
import HomePage from '../views/peoples';

const ContentLayout = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {routePaths.map((route) => (
        <Route key={route.key} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default ContentLayout;

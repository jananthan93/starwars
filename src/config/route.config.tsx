import { Route } from '../@type/routes';
import HomePage from '../views/peoples';
import FavouritePeoples from '../views/peoples/FavouritePeoples';
import PeopleDetail from '../views/peoples/PeopleDetail';

export const routePaths: Route[] = [
  {
    key: 'peoples.all',
    path: 'peoples',
    component: <HomePage />,
  },
  {
    key: 'peoples.favourites',
    path: 'favourites',
    component: <FavouritePeoples />,
  },
  {
    key: 'peoples.detail',
    path: 'peoples/:id',
    component: <PeopleDetail />,
  },
];

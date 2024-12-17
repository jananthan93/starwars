import React from 'react';
import CharacterCard from './components/CharacterCard';
import Button from '../../components/ui/Button';

const FavouritePeoples = () => {
  return (
    <>
      <main className="flex-grow overflow-y-auto my-4">
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4">Favourite peoples</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CharacterCard />
          </div>
        </div>
      </main>
      <nav className="flex justify-between px-4 py-4">
        <Button>Previous</Button>
        <Button>Next</Button>
      </nav>
    </>
  );
};

export default FavouritePeoples;

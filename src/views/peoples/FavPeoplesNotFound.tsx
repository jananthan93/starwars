import { IoMdHeart } from 'react-icons/io';
import Button from '../../components/ui/Button';
import { Link } from 'react-router';

function FavPeoplesNotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <IoMdHeart size="120px" color="red" />
      <p className="text-lg font-semibold mt-4">No favorites added yet</p>
      <p className="text-gray-600 mt-2">
        Add characters to your favorites list and they'll show up here.
      </p>
      <Link to="/">
        <Button className="mt-4">Browse Characters</Button>
      </Link>
    </div>
  );
}

export default FavPeoplesNotFound;

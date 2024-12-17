import { IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router';

Header.propTypes = {};

function Header() {
  return (
    <nav className="bg-blue-600 p-4 text-white sticky top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a
          className="text-lg font-bold text-white hover:text-gray-200"
          href="/"
        >
          <img
            alt="Star Wars Characters"
            src="/image/star-wars.png"
            className="h-10 w-auto object-cover"
          />
        </a>
        <Link data-testid="FavoriteIcon" to="/favourites">
          <IoMdHeart size={'30'} />
        </Link>
      </div>
    </nav>
  );
}

export default Header;

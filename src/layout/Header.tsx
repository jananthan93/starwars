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
        <a data-testid="FavoriteIcon" href="/favorites">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="FavoriteIcon"
          >
            <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
          </svg>
        </a>
        <a className="hidden" data-testid="ViewDetail" href="/character/:id">
          View Detail
        </a>
      </div>
    </nav>
  );
}

export default Header;

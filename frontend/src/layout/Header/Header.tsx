import { useState } from "react";
import { ModeToggle } from "@/components/theme/mode-toggle";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-2">
      <div className="container mx-auto px-3 py-2">
        <div className="flex justify-between items-center py-1">
          <div className="logo">
            <img src={logo} alt="logo" className="w-14" />
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/create-book">Add book</Link>
              </li>
              <li>
                <Link to="/borrow">Borrow summary</Link>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-7 h-7 transition-transform duration-300" />
            ) : (
              <Menu className="w-7 h-7 transition-transform duration-300" />
            )}
          </button>

          <div>
            <ModeToggle />
          </div>
        </div>

        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="mt-2">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  to="/create-book"
                  className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Add book
                </Link>
              </li>
              <li>
                <Link
                  to="/borrow"
                  className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Borrow summary
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

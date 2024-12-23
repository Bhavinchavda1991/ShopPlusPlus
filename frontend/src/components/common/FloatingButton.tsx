import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { store } from "../../redux/store";
import { setTheme } from "../../redux/theme/themeSlice";
import { useNavigate } from "react-router-dom";

const FloatingButton = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const handleThemeSwitch = () => {
    store.dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const navigate = useNavigate();

  const handleRedirect = (path: any) => {
    navigate(path);
  };

  return (
    <div>
      <div className="group fixed bottom-5 right-5 p-2  flex items-end justify-end w-24 h-24 ">
        <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 z-50 absolute  ">

          <div
            onClick={handleThemeSwitch}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;

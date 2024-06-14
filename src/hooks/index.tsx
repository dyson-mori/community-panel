import { useState, useEffect } from "react";

type CookieProps = {
  cookieName: string;
};

export const useCookie = ({ cookieName }: CookieProps) => {
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${cookie}=`));

    setCookieValue(cookie ? cookie.split("=")[1] : "");
  }, [cookieName]);

  const setCookie = (value: string, expirationDate: string) => {
    document.cookie = `${cookieName}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  };

  const deleteCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  return [cookieValue, setCookie, deleteCookie];
};

// https://www.sitepoint.com/react-cookies-sessions/
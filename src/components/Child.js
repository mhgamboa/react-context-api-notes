import { useContext } from "react";
import IsDarkContext from "../contexts/IsDark";

export const Child = () => {
  const { isDark } = useContext(IsDarkContext);
  return (
    <>
      <h1>{isDark}</h1>
    </>
  );
};

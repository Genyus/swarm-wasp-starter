import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div className={"m-auto flex flex-col items-center gap-6 p-14"}>
      <h1 className={"mx-auto text-center text-8xl font-extrabold"}>404</h1>
      <h3 className={"mx-auto text-center text-2xl font-medium"}>
        Page not found!
      </h3>
      <Link to={"/"}>Home »</Link>
    </div>
  );
}

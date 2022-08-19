import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <h3>Check if your are not in the correct page</h3>
      <Link href="/">Click here to go HOME</Link>
    </div>
  );
};

export default PageNotFound;

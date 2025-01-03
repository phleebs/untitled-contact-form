import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";

function Error() {
  const location = useLocation();
  const { flaggedFor } = location.state || {};

  return (
    <div className="items-between flex min-h-screen flex-col bg-zinc-50 px-4 py-3 md:px-8">
      <Header />

      <main className="grid grid-cols-8">
        <div className="col-span-full rounded-lg bg-red-400 px-4 py-4">
          <h1 className="text-3xl">Form Submission Error!</h1>
          <p className="mb-10">
            Your form is flagged and can't be submitted as it matches:
            <span className="text-bold text-lg text-black">[{flaggedFor}]</span>
            !
          </p>

          <p className="text-xl text-stone-100">
            Go back to fill the form again{" "}
            <Link to="/" className="text-blue-800">
              here
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

export default Error;

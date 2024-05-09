import { Outlet } from "react-router-dom";

type Props = {};
const nacgationLabel = ["Home", "About", "Service", "Contact"];
function RootLayout({}: Props) {
  return (
    <>
      <header className="top-0 z-50 fixed flex justify-around items-center p-8 w-full">
        <h2 className="font-bold text-2xl text-sage-green pointer-events-none">
          LOGO
        </h2>
        <nav className="">
          <ul className="flex items-end gap-2 font-poppins">
            {nacgationLabel.map((label, index) => (
              <li
                key={index}
                className="hover:bg-sage-green/70 mx-3 px-4 py-2 rounded-3xl font-semibold text-sage-green hover:text-white cursor-pointer"
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="h-full">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

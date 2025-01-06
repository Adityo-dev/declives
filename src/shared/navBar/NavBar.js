import Link from "next/link";

const navBarListDataInfo = [
  { name: "about", url: "" },
  { name: "project", url: "" },
  { name: "contact", url: "" },
];
function NavBar() {
  return (
    <main className="max-w-[1700px] mx-auto px-5 flex items-center justify-between mt-6 mb-6">
      <div>
        <p className="text-2xl">Logo</p>
      </div>
      <div>
        <ul className="flex items-center gap-6 capitalize border border-e-red-50 py-2 px-6 rounded-full">
          {navBarListDataInfo.map((navList, ind) => (
            <Link href={navList?.url} key={ind}>
              {navList?.name}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <button className="border border-e-red-50 py-2 px-6 rounded-full">
          Let’s Talk
        </button>
      </div>
    </main>
  );
}

export default NavBar;

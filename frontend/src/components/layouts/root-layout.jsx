import MenuLayout from "@/components/layouts/menu-layout";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuLayout />
        <div className="relative md:py-6 py-26">
          <main className="flex-grow max-w-7xl px-10 z-0 mx-auto">
            {children}
          </main>
        </div>
    </div>
  );
};

export default Layout;

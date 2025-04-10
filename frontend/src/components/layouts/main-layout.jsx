import styles from "@/style";

const MainLayout = ({ title, description, children }) => {
  return (
    <section className="my-16 md:my-26">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-neutral-500">{description}</p>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
};
export default MainLayout;

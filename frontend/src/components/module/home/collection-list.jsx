import Collection from "@/components/card/collection";
import MainLayout from "@/components/layouts/main-layout";

const CollectionList = () => {
  return (
    <MainLayout
      title={"Trending Collection"}
      description={"Checkout Our Weekly Trending Collection On Our Platform"}
    >
      <div className="flex justify-center md:justify-between">
        <div className="grid grid-cols-1 md:grid-rows-auto md:grid-cols-3 gap-5">
          <Collection />
          <Collection />
          <Collection />
        </div>
      </div>
    </MainLayout>
  );
};

export default CollectionList;

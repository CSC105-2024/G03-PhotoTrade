import Picture from "@/components/card/picture";
import Collection from "@/components/card/collection";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, Card } from "@/components/ui/card";
import { getAllPhoto, getPhotoByCategory } from "@/reducer/photo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { useSearchParams } from "react-router-dom";

const MarketList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { photoList, total } = useSelector((state) => state.photo);
  const currentPage = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("pageSize") || "5");
  console.log(currentPage, perPage);

  // const [selectedCategories, setSelectedCategories] = useState([]);
  // useEffect(() => {
  //   if (selectedCategories.length === 0) {
  //     dispatch(getAllPhoto(currentPage, perPage));
  //   } else {
  //     dispatch(getPhotoByCategory(selectedCategories));
  //   }
  // }, [dispatch, selectedCategories]);

  useEffect(() => {
    dispatch(getAllPhoto({ page: currentPage, perPage }));
    setSearchParams({ page: currentPage, pageSize: perPage });
  }, [dispatch, currentPage, perPage, setSearchParams]);

  return (
    <section>
      <Tabs defaultValue="photo">
        <TabsList className="w-full">
          <TabsTrigger value="photo" className="cursor-pointer">
            Photo
          </TabsTrigger>
          <TabsTrigger value="collections" className="cursor-pointer">
            Collections
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photo">
          <Card>
            <CardContent>
              <div className="flex justify-center md:justify-between items-center min-h-screen">
                <div className="grid grid-cols lg:grid-cols-4 mx-auto gap-4">
                  {photoList.map((item) => (
                    <Picture
                      key={item.id}
                      name={item.title}
                      price={item.price}
                      username={item.user.name}
                      url={item.thumbnail_url}
                      id={item.id}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collections">
          <Card>
            <CardContent>
              <div className="flex justify-center md:justify-between items-center">
                <div className="grid grid-cols md:grid-cols-3 mx-auto gap-4">
                  <Collection />
                  <Collection />
                  <Collection />
                  <Collection />
                  <Collection />
                  <Collection />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <PaginationWithLinks
        page={currentPage}
        pageSize={perPage}
        totalCount={total}
        pageSizeSelectOptions={{
          pageSizeOptions: [5, 10, 25, 50],
        }}
      />
    </section>
  );
};

export default MarketList;

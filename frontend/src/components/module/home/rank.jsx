import React from "react";
import { userRank } from "@/constants";
import MainLayout from "@/components/layouts/main-layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import Ellipsebutbigger from "@/assets/Ellipsebutbigger.png";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { getUserAll } from "@/reducer/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Rank = () => {
  const navigate = useNavigate();
  const top3 = userRank.filter((item) => item.id <= 3);
  const others = userRank.filter((item) => item.id > 3);

  const dispatch = useDispatch();
  const { userAll, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserAll());
  }, [dispatch]);

  return (
    <MainLayout
      title={"Top 10 Image Creators"}
      description={
        "Discover the Most Popular Photographers and Artists on Our Platform"
      }
    >
      <motion.div
        animate={{ y: [10, 0, 10] }}
        transition={{
          repeat: Infinity,
          duration: 0.7,
          ease: "easeInOut"
        }}
      >
        <div className="flex justify-center items-end gap-4 mt-24">
          <div className="flex flex-col items-center">
            <img src={Ellipsebutbigger} className="w-20 h-20 lg:w-34 lg:h-34 rounded-full border-4 border-gray-300 cursor-pointer" alt={top3[1].name}/>
            <span className="text-lg font-bold mt-2">{top3[1].name}</span>
            <span className="text-sm text-gray-500">2nd</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Ellipsebutbigger} className="w-24 h-24 lg:w-38 lg:h-38 rounded-full border-4 border-yellow-400 cursor-pointer" alt={top3[0].name}/>
            <span className="text-xl font-bold mt-2">{top3[0].name}</span>
            <span className="text-base text-yellow-500">1st</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Ellipsebutbigger} className="w-20 h-20 lg:w-30 lg:h-30 rounded-full border-4 border-orange-700 cursor-pointer" alt={top3[2].name}/>
            <span className="text-lg font-bold mt-2">{top3[2].name}</span>
            <span className="text-sm text-orange-700">3rd</span>
          </div>
        </div>
      </motion.div>

      <Card className="mt-10 max-w-2xl mx-auto">
        <CardContent>
          <Table>
            <TableCaption>A list of Image Creators.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Image count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userAll.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell
                    onClick={() => navigate(`/user/auth/dashboard/${item.id}`)}
                    className={"cursor-pointer"}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell className="text-right">{item.image}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Rank;

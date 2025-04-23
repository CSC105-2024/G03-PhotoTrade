import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Ellipsis } from "lucide-react";
const BreadcrumbTop = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-gray-700 dark:text-gray-200">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:underline"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400 dark:text-gray-500" />
        <BreadcrumbItem>
          <Ellipsis size={16} />{" "}
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400 dark:text-gray-500" />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:underline"
          >
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400 dark:text-gray-500" />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold text-gray-900 dark:text-white hover:text-black dark:hover:text-white hover:underline cursor-pointer">
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbTop;

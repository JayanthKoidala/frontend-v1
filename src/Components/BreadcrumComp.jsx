import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumComp = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((e) => e);
  let path = "";
  return (
    <Breadcrumb
      spacing="8px"
      fontWeight={"600"}
      separator={<ChevronRightIcon color="gray.500" />}
    >
      {pathnames.map((name, index) => {
        path += `/${name}`;
        return (
          <BreadcrumbItem
            key={index}
            style={
              index == pathnames.length - 1
                ? { color: "#071c42" }
                : { color: "gray.500" }
            }
          >
            <Link to={path}>{name}</Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumComp;

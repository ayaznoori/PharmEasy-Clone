import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../DayDeals/daydeals.module.css";
import { CategoriesData } from "./CategoriesData";

const Categories = () => {
  const navigate = useNavigate();

  const handleClick = (heading) => {
    heading = heading.toLowerCase().split(" ").join("");
    navigate(`/products/${heading}`);
  };

  return (
    <div style={{ margin: "auto", width: "95%" }}>
      <Heading fontSize="26px" textAlign="left" marginTop="70px">
        Shop by Categories
      </Heading>
      <Stack
        direction="horizontal"
        gap="30px"
        justify="space-between"
        overflow="auto"
        marginTop="35px"
        height="240px"
      >
        {CategoriesData.map((el, i) => (
          <Box
            key={i}
            width="151px"
            height="206px"
            cursor="pointer"
            onClick={() => handleClick(el.heading)}
          >
            <Text fontSize={"10px"} fontWeight="500" color={el.data==="**Contains Data" ? "green.400" : "red"}>
              {el.data}
            </Text>
            <Box
              className={styles.img}
              padding="24px 16px"
              width="151px"
              height="160px"
              border="1px solid #dfdfdf"
              borderRadius="10px"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                style={{ borderRadius: "5px", width: "117px", height: "105px" }}
                src={el.img}
                alt=""
              />
            </Box>
            <Box width="151px" marginTop="15px">
              <p style={{ fontWeight: "500" }}>{el.heading}</p>
            </Box>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Categories;

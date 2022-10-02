import { Stack } from "@chakra-ui/react";
import React from "react";
import { CarouselData } from "./CarouselData";

const Carousel = () => {
  return (
    <div>
      <Stack
        direction="horizontal"
        gap="40px"
        justify="space-between"
        width="95%"
        margin="auto"
        marginTop="50px"
        overflow={"scroll"}
      >
        {CarouselData.map((el, i) => (
          <img
            style={{
              borderRadius: "15px",
              width: "527px",
              height: "227px",
              cursor: "pointer",
            }}
            key={i}
            src={el.img}
            alt=""
          />
        ))}
      </Stack>
    </div>
  );
};

export default Carousel;

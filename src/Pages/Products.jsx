import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductCart,
  getCartData,
  getData,
} from "../Redux/ProductData/action";
import "./Products.css";
import "../App.css";
import { useNavigate } from "react-router";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.appReducer);
  const cartArr = useSelector((store) => store.appReducer.cartdata);

  useEffect(() => {
    dispatch(getCartData());
    dispatch(getData());
  }, [dispatch]);

  return (
    <Box>
      <Box>
        <Heading as="h3" className="App" marginTop={"10px"}>Products</Heading>
        {products.isLoading ? (
          <Heading className={"App"}>.......Loading</Heading>
        ) : (
          <Flex flexWrap={"wrap"} justifyContent={"space-around"} marginTop={"10px"}>
            {products.data.map((product) => {
              return (
                <ProductSimple
                  key={product.id}
                  cartarr={cartArr}
                  productobj={product}
                  filename={product.filename}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  description={product.description}
                />
              );
            })}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

function ProductSimple({
  cartarr,
  productobj,
  filename,
  title,
  price,
  rating,
  description,
}) {
  const [descriptions, setDescriptions] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCart = (productobj, cartArr) => {
    let flag = false;
    for (let i = 0; i < cartArr.length; i++) {
      if (cartArr[i].id === productobj.id) {
        alert("Selected Product is Available into a Cart");
        navigate("/products", { replace: true });
        flag = true;
      }
    }
    if (flag === false) {
      dispatch(addProductCart(productobj));
    }
    // console.log(productobj);
    // console.log(cartArr);
  };
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={4}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${filename})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={filename}
            className={"productimg"}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"larger"} fontFamily={"body"} fontWeight={600}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={400} fontSize={"l"}>
              Price :- ${price}
            </Text>
          </Stack>
          <Text fontWeight={300} fontSize={"l"}>
            Rating :- {rating}
          </Text>
          {descriptions ? (
            <p
              className="description"
              onClick={() => {
                setDescriptions(!descriptions);
              }}
            >
              Description
            </p>
          ) : (
            <Text
              className="descriptionText"
              color={"gray.600"}
              onClick={() => {
                setDescriptions(!descriptions);
              }}
            >
              {description}
            </Text>
          )}
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => {
              handleCart(productobj, cartarr);
            }}
          >
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

export default Products;

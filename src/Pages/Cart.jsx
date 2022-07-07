import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/ProductData/action";
import { Box, Heading, Stack, Image, Text, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { removeProductCart } from "../Redux/ProductData/action";

const Cart = () => {
  const [updateCart, setUpdateCart] = useState(true);
  const dispatch = useDispatch();
  const cartArr = useSelector((store) => store.appReducer.cartdata);
  const removeProduct = (id) => {
    setUpdateCart(!updateCart);
    dispatch(removeProductCart(id));
  };

  const [totalAmt, setTotalAmt] = useState(0);

  let sum = 0;
  let Total = () => {
    cartArr.map((ele) => {
      sum += ele.price;
    });
    setTotalAmt(sum);
  };

  useEffect(() => {
    dispatch(getCartData());
  }, [updateCart]);

  useEffect(() => {
    Total();
  });

  return (
    <Box>
      <Heading as="h3" className="App" marginTop={"10px"}>
        Cart
      </Heading>
      {cartArr.length &&
        cartArr.map((product) => {
          return (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.filename}
              removeProduct={removeProduct}
            />
          );
        })}
      <Text textAlign={"center"} fontSize={"4xl"}>
        Total Amount :- $ {totalAmt}
      </Text>
      <Box textAlign={"center"} border={"0.1px solid tr"}>
        <Button
          backgroundColor={"black"}
          width={"500px"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"2xl"}
          _hover={{ color: "yellow", backgroundColor: "green" }}
          onClick={() => {
            alert("Congrats Your Order is Placed !");
          }}
        >
          CheckOut
        </Button>
      </Box>
    </Box>
  );
};

function CartItem({ id, title, description, price, img, removeProduct }) {
  return (
    <Box
      border={"0.2px solid tr"}
      rounded={"lg"}
      width={"fit-content"}
      margin={"auto"}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width="250px"
          height="275px"
          border={"0.2px solid tr"}
          position={"relative"}
          padding={"0 1rem"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "95%",
            h: "95%",
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            backgroundImage: `url(${img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
        >
          <Image
            rounded={"lg"}
            height={265}
            width={250}
            padding={"2%"}
            objectFit={"cover"}
            src={img}
          />
        </Box>
        <Box width={"300px"} height={"300px"} border={"0.2px solid tr"}>
          <Stack p={4}>
            <Heading as={"h3"} size={"lg"}>
              {title}
            </Heading>
            <Text>{description}</Text>
            <Text fontWeight={400} fontSize={"l"}>
              Price :- ${price}
            </Text>
            <Button
              variant={"solid"}
              leftIcon={<DeleteIcon />}
              onClick={() => {
                removeProduct(id);
              }}
            >
              Remove
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Cart;

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showp, setShowp] = useState(false);
  const handleClickP = () => setShowp(!showp);
  const [showcp, setShowcp] = useState(false);
  const handleClickCP = () => setShowcp(!showcp);
  const toast = useToast();

  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [picLoading, setPicLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async () => {
    setPicLoading(true);
    if (!username || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(username, email, password, profilePicture);
    try {
      //   const config = {
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //   };
      //   const { data } = await axios.post(
      //     "http://127.0.0.1:8000/api/v1/user/register",
      //     {
      //       username,
      //       email,
      //       password,
      //       profilePicture
      //     },
      //     config
      //   );
      //   console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      //   localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
      setPicLoading(false);
    } catch (error) {
      //   toast({
      //     title: "Error Occured!",
      //     description: error.response.data.message,
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "bottom",
      //   });
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    // setPicLoading(true);
    // if (pics === undefined) {
    //   toast({
    //     title: "Please Select an Image!",
    //     status: "warning",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom",
    //   });
    //   return;
    // }
    // console.log(pics);
    // if (pics.type === "image/jpeg" || pics.type === "image/png") {
    //   const data = new FormData();
    //   data.append("file", pics);
    //   data.append("upload_preset", "WebApp");
    //   data.append("cloud_name", "domasemqw");
    //   fetch("https://api.cloudinary.com/v1_1/domasemqw/image/upload", {
    //     method: "post",
    //     body: data,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setProfilePicture(data.url.toString());
    //       console.log(data.url.toString());
    //       setPicLoading(false);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setPicLoading(false);
    //     });
    // } else {
    //   toast({
    //     title: "Please Select an Image!",
    //     status: "warning",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom",
    //   });
    //   setPicLoading(false);
    //   return;
    // }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={showp ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClickP}>
              {showp ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={showcp ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClickCP}>
              {showcp ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;

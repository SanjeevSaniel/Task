import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  HStack,
  Link,
  Button,
  Container,
} from "@chakra-ui/react";
import OTPInput from "otp-input-react";
import { useState } from "react";

const OTPVerification = () => {
  // State variable to store the OTP Input value
  const [otp, setOtp] = useState("");

  // Log in OTP to the console
  const handleChange = () => {
    console.log("OTP", otp);
    setOtp("");
  };

  return (
    <Container
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="blackAlpha.700"
      color="white"
    >
      <Card
        color="white"
        backgroundColor="#252429"
        padding={6}
        width="25rem"
        height="35rem"
      >
        <CardHeader>
          <Heading>LOGO</Heading>
        </CardHeader>
        <CardBody display="flex" justifyContent="center" alignItems="center">
          <Stack width="100%" spacing={5}>
            <Text fontWeight="bold" fontSize="xl" marginBottom={3}>
              Verification
            </Text>

            <HStack justifyContent="space-between" fontSize="sm">
              <Text>SMS OTP</Text>
              <Text>Sent on 77777-77777</Text>
            </HStack>

            <HStack color="black" paddingX={4} justifyContent="center">
              <OTPInput
                value={otp}
                onChange={setOtp}
                autoFocus
                OTPLength={4}
                otpType="number"
                // secure
              />
            </HStack>

            <Text fontSize="sm">
              Entered Wrong Details?{" "}
              <Link _hover={{ color: "grey" }} color="#b166e5">
                Re-enter
              </Link>
            </Text>
            <Button
              bgGradient="linear(to-r, #e17660, #b667d8)"
              colorScheme="pink"
              color="white"
              onClick={handleChange}
            >
              Verify
            </Button>
          </Stack>
        </CardBody>

        <CardFooter>
          <Link _hover={{ color: "grey" }} fontSize="sm">
            Go back to Home
          </Link>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default OTPVerification;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Box,
  HStack,
  Link,
  AbsoluteCenter,
  Button,
  Input,
} from "@chakra-ui/react";
import OTPInput from "otp-input-react";
import { useState } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (name, event) => {
    // setOtp({ [name]: event.target.value });
  };

  return (
    <Box
      position="relative"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        backgroundColor="#252429"
        padding={6}
        width="25rem"
        height="35rem"
        // justifyContent="center"
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

            <HStack paddingX={4} justifyContent="center">
              <OTPInput
                value={otp}
                onChange={setOtp}
                autoFocus
                OTPLength={4}
                otpType="number"
                // secure
              />
              {/* <Input
                autoFocus
                name="one"
                value={value}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                min={0}
                max={9}
                maxLength={1}
                type="number"
                autoComplete="one-time-code"
                textAlign="center"
                backgroundColor="#32343a"
                htmlSize={1}
                width="50px"
              />
              <Input
                name="two"
                min={0}
                max={9}
                maxLength={length}
                type="number"
                textAlign="center"
                backgroundColor="#32343a"
                htmlSize={1}
                width="50px"
              />
              <Input
                name="three"
                min={0}
                max={9}
                maxLength={length}
                type="number"
                textAlign="center"
                backgroundColor="#32343a"
                htmlSize={1}
                width="50px"
              />
              <Input
                name="four"
                min={0}
                max={9}
                maxLength={length}
                type="number"
                textAlign="center"
                backgroundColor="#32343a"
                htmlSize={1}
                width="50px"
              /> */}
            </HStack>

            <Text fontSize="sm">
              Entered Wrong Details? <Link color="#b166e5">Re-enter</Link>
            </Text>
            <Button
              bgGradient="linear(to-r, #e17660, #b667d8)"
              colorScheme="pink"
              color="white"
            >
              Verify
            </Button>
          </Stack>
        </CardBody>

        <CardFooter>
          <Link fontSize="sm">Go back to Home</Link>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default OTPVerification;

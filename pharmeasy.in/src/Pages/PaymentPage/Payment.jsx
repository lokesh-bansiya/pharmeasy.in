import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,PinInput, PinInputField ,useToast
  } from '@chakra-ui/react';
  import { useState,useEffect } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Visa,AmazonTransparent,Googlepay,Mastercard,PaypalTransparent} from "react-pay-icons";

  import { useNavigate } from 'react-router-dom';
 

  
 export default function PaymentPage() {
  const navigate=useNavigate()
  
    const [showPassword, setShowPassword] = useState(false);
    const[otp,setotp]=useState(false)
    const [totalAmount,setTotalAmount]=useState(0)
    const [isLoading,setLoading]=useState(false)
    const toast=useToast()

    const OptSent=()=>{
      setLoading(true)

      setTimeout(() => {
        setotp(true)
        setLoading(false)
        toast({
          title: "OTP sent to your mobile",
          position: "top",
          isClosable: true,
          status:"success"
        })
      }, 2000);
      
 

    }

    const orderConfirmed=()=>{

     
      toast({
        title: "Order Placed Successfully ,Thank You For the Shopping",
        position: "top",
        isClosable: true,
        status:"success"
      })
navigate("/")
     
  

    }


    return (
      <Flex direction="column" textAlign="center" alignContent="center" alignItems="center" justifyContent="center">
        
<Box display="flex" alignContent="center" justifyContent="center" alignItems="center"> 
<Visa style={{ margin: 10, width: 100 }} />

<AmazonTransparent style={{ margin: 10, width: 100 }} />
<Googlepay style={{ margin: 10, width: 100 }} />

<PaypalTransparent style={{ margin: 10, width: 100 }} />
<Mastercard style={{ margin: 10, width: 100 }} />





</Box>
<Heading>Payment</Heading>
<Box width="50%">
 {!otp &&  <Stack spacing={8}> 
<FormControl isRequired>
  <FormLabel>Debit/Credit card Number</FormLabel>
  <Input isRequired type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="16"placeholder='xxxx xxxx xxxx xxxx' />
</FormControl>

<FormControl isRequired>
  <FormLabel>Name on Card</FormLabel>
  <Input type="name" placeholder='xxxxxx xxxxx' />
</FormControl>




<Box display="flex" justifyContent="space-between">
    
<FormControl w="50%" isRequired>
  <FormLabel>Expiry date</FormLabel>
  <Input type="date"  />
</FormControl>


<FormControl w="30%" id="password" isRequired>
                <FormLabel>CVV</FormLabel>
                <InputGroup>
                  <Input  maxlength="3"  type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

</Box>


<Box >
    
<Button isLoading={isLoading}  onClick={OptSent} width="30%" colorScheme="telegram">Send otp</Button>
</Box>






</Stack> }


{otp && 
<Box  mt="10%" >
<HStack alignItems="center" justifyContent="center" >
  <PinInput size="lg" >
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
  
</HStack>

<Button onClick={orderConfirmed} mt="10" width="30%" colorScheme="teal">Confirm Order</Button>
<br />
<Button isLoading={isLoading} onClick={OptSent} mt="10" width="20%" colorScheme="telegram">Resend OTP</Button>


</Box>}

</Box>



        
      </Flex>
    );
  }
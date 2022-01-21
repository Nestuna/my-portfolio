import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import homeImage from "../../assets/images/header.png";
import "./Home.scss";

interface Props {
  author: string;
  title: string;
  presentation: string;
}

function Home(props: Props): ReactElement {
  const { author, title, presentation } = props;
  return (
    <div>
      <Flex
            bgImage={`url(${homeImage})`}
            h={{sm: '200px', lg: '452px'}}
            className="home-container"
            bgPosition="center"
            alignItems={'center'}
            p="2rem"
            border="1px"
            style={{ backgroundImage: `url(${homeImage})` }}>
            <Flex flex={5} justifyContent={'center'}>
              <Text
                className="big-titles"
                fontSize={{sm: "2rem", lg: "4rem"}}>
                {author}
              </Text>
            </Flex>
            <Spacer />
            <Flex
              flex={1}
              justifyContent={'flex-end'}
              sx={{fontWeight: '900'}}>
                <Text
                  fontSize={{sm: "4rem", lg: "7rem"}}
                  py={0}
                  className="big-titles">
                  {title}
                </Text>
            </Flex>
        </Flex>
        <Box p={4} m={4}>
          <Text fontSize={'xl'}>
            { presentation }
          </Text>
        </Box>
    </div>

  );
}

export default Home;

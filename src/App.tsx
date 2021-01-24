import {
  Box,
  Text,
  Container,
  Flex,
  TextProps,
  Img,
  Link,
  LinkProps,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { FC, useRef } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import genhPath from "./generationhome.svg";
import githubPath from "./github.svg";
import twitterPath from "./twitter.svg";
import linkedinPath from "./linkedin.svg";

const ColorText: FC<TextProps> = ({ color, ...props }) => {
  return <Text fontWeight="bold" as="span" color={`${color}.400`} {...props} />;
};

const SocialLink: FC<LinkProps> = (props) => {
  return (
    <Link
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export default function Home() {
  const aboutRef = useRef<any>();
  const handleScrollToMore = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box>
      <Box bg="gray.900" color="white" h="100vh">
        <Box h="100%">
          <Container h="100%" maxW="65rem">
            <Flex
              h="100%"
              justify="center"
              align="center"
              transform="translateY(-5%)"
            >
              <Text
                fontSize={["xl", "2xl", "3xl", "4xl"]}
                color="gray.400"
                textTransform="uppercase"
              >
                <Text
                  fontSize={["3xl", "4xl", "5xl", "6xl"]}
                  fontWeight="700"
                  lineHeight={1.2}
                  color="white"
                >
                  <ColorText fontWeight="900" color="pink">
                    Hi!
                  </ColorText>{" "}
                  My name is{" "}
                  <ColorText fontWeight="900" color="orange">
                    Adrien Antoine
                  </ColorText>
                  .
                </Text>

                <Text mt={5}>
                  Currently a{" "}
                  <ColorText color="green">product engineer</ColorText> at{" "}
                  <a
                    href="https://generationhome.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img
                      display="inline"
                      h="1.8em"
                      src={genhPath}
                      alt="Generation Home Logo"
                    />
                  </a>
                  , I am working to{" "}
                  <Link
                    fontWeight="bold"
                    color="blue.400"
                    href="https://generationhome.com/about-us"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    improve homeownership for all
                  </Link>
                  .
                </Text>

                <Text mt={3}>
                  <ColorText color="pink">Hard-working</ColorText> and{" "}
                  <ColorText color="orange">open-minded</ColorText>, I am
                  focused on{" "}
                  <ColorText color="green">
                    solving customers problems
                  </ColorText>{" "}
                  in a <ColorText color="pink">clean</ColorText> and{" "}
                  <ColorText color="orange">well documented</ColorText> way.
                </Text>

                <SimpleGrid
                  columns={3}
                  gap={5}
                  mt={5}
                  maxW={["10rem", "12rem", "15rem"]}
                  mx="auto"
                >
                  <SocialLink
                    flex={1}
                    bg="#55acee"
                    href="https://twitter.com/adriantoine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img w="70%" h="70%" src={twitterPath} alt="Twitter Logo" />
                  </SocialLink>
                  <SocialLink
                    flex={1}
                    bg="white"
                    href="https://github.com/adriantoine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img w="100%" h="100%" src={githubPath} alt="GitHub Logo" />
                  </SocialLink>
                  <SocialLink
                    flex={1}
                    bg="#0976b4"
                    href="https://www.linkedin.com/in/adriantoine/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img
                      w="70%"
                      h="70%"
                      src={linkedinPath}
                      alt="LinkedIn Logo"
                    />
                  </SocialLink>
                </SimpleGrid>
              </Text>
            </Flex>

            <Box
              color="white"
              position="absolute"
              bottom={["1rem", "2rem"]}
              left="50%"
              transform="translate(-50%)"
              textTransform="uppercase"
              as="button"
              onClick={handleScrollToMore}
              onKeyPress={handleScrollToMore}
            >
              <Text>About me</Text>
              <ChevronDownIcon />
            </Box>
          </Container>
        </Box>
      </Box>

      <Box ref={aboutRef} pt="5rem" pb="10rem">
        <Container maxW="45rem" fontSize={["l", "xl"]}>
          <Stack spacing={6}>
            <Box>
              <Heading mb={3}>Who am I?</Heading>
              <Text>
                I am a front-end developer living in London (UK) with 10 years
                of experience using various tools and frameworks.
              </Text>
              <Text mt={2}>
                I am passionate about web technologies and I love to experient
                things on my free time, trying out new frameworks, methods,
                tools, libraries and even languages sometimes. I am trying to be{" "}
                <a
                  href="https://github.com/adriantoine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  active on Github
                </a>{" "}
                and contribute as much as I can as well as to maintain my own
                repos.
              </Text>
            </Box>

            <Box>
              <Heading mb={3}>What do I do?</Heading>
              <Text>
                I have worked on several different projects, you can find more
                info about my commercial experience on{" "}
                <Link
                  color="blue.400"
                  href="https://www.linkedin.com/in/adriantoine/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  my LinkedIn profile
                </Link>{" "}
                and about my personal projects and involvment in open source
                projects on{" "}
                <Link
                  color="blue.400"
                  href="https://github.com/adriantoine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  my Github profile
                </Link>
                .
              </Text>
            </Box>

            <Box>
              <Heading mb={3}>How do I do it?</Heading>
              <Text>
                As a front-end developer, I am good at writing clean and
                structured code, refactoring old code and setting up an
                architecture for a new project. I am usually appreciated for my
                clean, organised and well-documented code.
              </Text>
              <Text mt={2}>
                And I also have experience on personal projects using these
                tools, and I'm quite excited about them.
              </Text>
            </Box>

            <Box>
              <Heading mb={3}>What else should you know about me?</Heading>
              <Text>
                A good thing to know about me is that I am French so I obviously
                like cheese and wine. Then I love travelling and{" "}
                <Link
                  color="blue.400"
                  href="https://www.flickr.com/people/adriantoine/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  taking photos
                </Link>
                , I'm also a big fan of cinema and enjoy going out in London in
                general.
              </Text>
            </Box>

            <Box>
              <Heading mb={3}>How to contact me?</Heading>
              <Text>
                If you want to get in touch for a job, I prefer if you{" "}
                <Link
                  color="blue.400"
                  href="https://www.linkedin.com/in/adriantoine/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  send me a message on LinkedIn
                </Link>
                . For anything else, please contact me{" "}
                <Link color="blue.400" href="mailto:adriantoine@gmail.com">
                  on my personal email
                </Link>{" "}
                or{" "}
                <Link
                  color="blue.400"
                  href="https://twitter.com/adriantoine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  send me a tweet
                </Link>
                .
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

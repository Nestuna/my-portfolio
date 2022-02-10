import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import {
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Grid,
  Avatar,
} from "@mui/material";
import { ReactElement } from "react";
import homeImage from "../../assets/images/header.png";
import "./Home.scss";

interface Props {
  author: string;
  title: string;
  presentation: string;
}

function Home(props: Props): ReactElement {
  const theme = useTheme();
  const { author, title, presentation } = props;
  const xs = theme.breakpoints.up("xs"),
    sm = theme.breakpoints.up("sm"),
    md = theme.breakpoints.up("md");

  return (
    <Box>
      <Box
          sx={{
            bgImage: `url(${homeImage})`,
            [xs]: {
              mt: 55,
              bgPosition: "bottom",
            },
            [sm]: {
              mt: 65,
              bgPosition: "bottom",
            },
          }}
        >
            <Grid container p={3}>
              <Grid
                container
                item
                xs={12} md={6}
                sx={{
                  justifyContent: 'center',
                  [md]: {
                    textAlign: "left",
                  },
                }}
              >
                <Grid item xs={6}>
                  <Avatar
                    sx={{
                      m:'auto',
                      bgcolor: theme.palette.secondary.main,
                      width: "20vw",
                      height: "20vw",
                    }}
                  ></Avatar>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    [xs]: {
                      textAlign: "center",
                    },
                    [md]: {
                      textAlign: "left",
                    },
                  }}
                >
                  <Typography
                    color="secondary"
                    sx={{
                      [xs]: {
                        typography: "h4",
                      },
                      [sm]: {
                        typography: "h3",
                      },
                      [md]: {
                        typography: "h2",
                      },
                    }}
                  >
                    {author}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sm={12} md={6} sx={{
                [xs]: { textAlign: 'center'},
                [md]: { textAlign: "right" }
              }}>
                <Typography
                  color="secondary.dark"
                  sx={{
                    [xs]: {
                      typography: "h2",
                    },
                    [sm]: {
                      typography: "h1",
                    },
                  }}
                >
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={'1rem'} px={'1rem'}>
            <Typography>
              { presentation }
            </Typography>
          </Box>
    </Box>
  );
}

export default Home;

import {
  AppBar,
  Button,
  Container,
  Box,
  Toolbar,
  Typography,
  useTheme,
  SvgIconTypeMap,
  Stack,
  Link,
} from "@mui/material";
import React from "react";
import "./NavBar.scss";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MenuEntry from "../../types/ui";

const NavBar: React.FC = () => {
  const theme = useTheme();
  const menuEntries: any[] = [
    { icon: <HomeRoundedIcon />, label: "home" },
    { icon: <GradeRoundedIcon />, label: "skills" },
    { icon: <AssignmentRoundedIcon />, label: "projects" },
    { icon: <EmailRoundedIcon />, label: "contacts" },
  ];
  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography color='secondary' sx={{ flexGrow: 1, pr: 2 }}>
            N.A
          </Typography>
          <Stack
            direction="row"
            sx={{ flexGrow: 0, display: "flex" }}
            spacing={{ sm: 2}}
          >
            {menuEntries.map((entry) => (
              <Button
                className="menu-list-item"
                key={entry}
                startIcon={entry.icon}
                color="secondary"
                sx={{ fontSize: "1rem" , transition: '.5s' }}
              >
                <Link
                  sx={{display: { xs: 'none', sm: 'inline' }}}
                  underline="none"
                  color="inherit"
                  href={`#${entry.label}`}
                >
                  {entry.label}
                </Link>
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

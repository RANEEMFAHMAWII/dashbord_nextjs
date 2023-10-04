import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { AnyMxRecord } from "dns";
import SearchForm from "./search/SearchForm";
import CurrentDate from "./Date/CurrentDate";
import Profile from "./Profile/Profile";
import Notifications from "./notification/Notification";
import { GetUser } from "@/server/users/users";

const TopNavbar = ({
  toogleActive,
  userImageUrl,
  userName,
  userRole,
  // logout,
}: {
  toogleActive: any;
  userImageUrl: any;
  userName: string;
  userRole: any;
  // logout: any;
}) => {
  return (
    <>
      <div className="topNavbarDark">
        <AppBar
          color="inherit"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
            py: "6px",
            mb: "30px",
            position: "sticky",
          }}
          className="top-navbar-for-dark"
        >
          <Toolbar>
            <Tooltip title="Hide/Show" arrow>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                onClick={toogleActive}
              >
                <i className="ri-align-left"></i>
              </IconButton>
            </Tooltip>

            {/* Search form */}
            <SearchForm />

            <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

            <Stack direction="row" spacing={2}>
              {/* CurrentDate */}
              <CurrentDate />

              {/* Notification */}
              <Notifications />

              {/* Profile */}
              <Profile
                profileImageUrl={userImageUrl}
                userName={userName}
                userRole={userRole}
                // logout={logout}
              />
            </Stack>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default TopNavbar;

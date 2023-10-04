import { cookies } from "next/headers";
import {
  IconButton,
  Typography,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Link,
  ListItemIcon,
  Divider,
} from "@mui/material";

import Logout from "@mui/icons-material/Logout";
import React from "react";

const Profile = ({
  profileImageUrl,
  userName,
  userRole,
}: // logout,
{
  profileImageUrl: string;
  userName: string;
  userRole: any;
  // logout: any;
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ p: 0 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          className="ml-2"
        >
          <Avatar
            src={profileImageUrl}
            alt="Adison Jeck"
            sx={{ width: 40, height: 40 }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "10px",
            boxShadow: "0px 10px 35px rgba(50, 110, 189, 0.2)",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        className="for-dark-top-navList"
      >
        <MenuItem>
          <Avatar src={profileImageUrl} className="mr-1" />
          <Box>
            <Typography sx={{ fontSize: "11px", color: "#757FEF" }}>
              {userRole}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#260944",
                fontWeight: "500",
              }}
            >
              {userName}
            </Typography>
          </Box>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon sx={{ mr: "-8px", mt: "-3px" }}>
            <Logout fontSize="small" />
          </ListItemIcon>

          <Link href="/login" fontSize="13px" color="inherit" underline="none">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;

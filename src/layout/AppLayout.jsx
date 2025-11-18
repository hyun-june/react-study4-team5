import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Outlet, Link, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (!keyword.trim()) return;

    navigate(`/country?name=${encodeURIComponent(keyword)}`);
    setKeyword("");
    setShowSearch(false);
  };

  return (
    <div className="layout-container">
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Zourney
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              HOME
            </Button>
            <Button color="inherit" component={Link} to="/">
              TOURS
            </Button>
            <Button color="inherit" component={Link} to="/">
              DESTINATION
            </Button>
            <Button color="inherit" component={Link} to="/">
              BLOG
            </Button>
            <Button color="inherit" component={Link} to="/">
              PAGES
            </Button>
            <Button color="inherit" component={Link} to="/">
              CONTACT
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">+(40) 8282 8888 7777</Typography>
            <Box
              component="form"
              onSubmit={handleSearch} 
              sx={{ display: "flex", alignItems: "center" }}
            >
              {showSearch && (
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Search country..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
              )}
              <IconButton
                type="submit"
                color="inherit"
                onClick={() => setShowSearch((prev) => !prev)}
              >
                <SearchIcon/>
              </IconButton>
            </Box>

            <IconButton color="inherit">
              <PersonIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default AppLayout;

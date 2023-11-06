import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
function Search() {
    const handleSearch = (event) => {
      // Handle the search logic here
    };
  
    return (
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
    );
  }

  export default Search
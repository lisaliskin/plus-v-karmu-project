import React from 'react';
import {
  Breadcrumbs, StyledBreadcrumb, HomeIcon, ExpandMoreIcon,
} from '@material-ui/core';

export default function MainPage() {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          // onClick={handleClick}
        />
        {/* <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} /> */}
        <StyledBreadcrumb
          label="Accessories"
          deleteIcon={<ExpandMoreIcon />}
          // onClick={handleClick}
          // onDelete={handleClick}
        />
      </Breadcrumbs>
    </div>
  );
}

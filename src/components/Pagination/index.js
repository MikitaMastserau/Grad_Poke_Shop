import PropTypes from "prop-types";

import MaterialPagination from "@mui/material/Pagination";

export const Pagination = ({ page, handlePageChange }) => {
   return (
      <MaterialPagination count={40} color="standard" page={page} onChange={handlePageChange} />
   );
};

Pagination.propTypes = {
   page: PropTypes.number.isRequired,
   handlePageChange: PropTypes.func.isRequired,
};
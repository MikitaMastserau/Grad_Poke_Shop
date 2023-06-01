import MaterialPagination from "@mui/material/Pagination";

export const Pagination = ({ page, handlePageChange }) => {
   return (
      <MaterialPagination count={38} color="standard" page={page} onChange={handlePageChange} />
   );
};
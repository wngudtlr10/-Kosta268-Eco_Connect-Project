import React from 'react';
import { CPagination, CPaginationItem, } from '@coreui/react';

const MissionPageNation = ({ page, totalPages, setPage }) => {

  const handlePageChange = (newPage) => {
    console.log('Page clicked', newPage);
    setPage(newPage);
  };


  return (
    <CPagination>
      <CPaginationItem onClick={() => handlePageChange(0)} disabled={page === 0} >
        &laquo;
      </CPaginationItem>

      {Array.from({ length: totalPages }, (_, index) => (
        <CPaginationItem 
          key={index}
          active={index === page}
          onClick={() => handlePageChange(index)}
          
        >
          {index + 1}
        </CPaginationItem>
      ))}

      <CPaginationItem onClick={() => handlePageChange(totalPages - 1)} disabled={page === totalPages - 1}>
        &raquo;
      </CPaginationItem>
    </CPagination>
  );
};

export default MissionPageNation;

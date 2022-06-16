import React from 'react';

const Author = ({ logo, subject, fullname, studentId, section }) => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p className="fs-1 fc-primary fw-bolder m-0">{subject}</p>
      <p className="fs-5 text-light animate__animated animate__infinite animate_slower animate__pulse">{`${fullname} รหัสนักศึกษา ${studentId} Sec.${section}`}</p>
    </>
  );
};

export default Author;

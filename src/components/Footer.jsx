import React from 'react';

// prettier-ignore
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright ⓒ
        {currentYear}
      </p>
    </footer>
  );
}

export default Footer;

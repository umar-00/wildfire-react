// // import { series } from "async";
// import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";

// //Image
// import searchIcon from "../../images/search-icon.svg";
// //Styles
// import { Wrapper, Content } from "./SearchBar.styles";

// const SearchBar = ({ setSearchTerm }) => {
//   const [localSearchTerm, setLocalSearchTerm] = useState("");
//   const initial = useRef(true);

//   useEffect(() => {
//     if (initial.current) {
//       initial.current = false;
//       return;
//     }

//     const timer = setTimeout(() => {
//       setSearchTerm(localSearchTerm);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [setSearchTerm, localSearchTerm]);

//   return (
//     <Wrapper>
//       <Content>
//         <img src={searchIcon} alt="search-icon"></img>
//         <input
//           type="text"
//           placeholder="Search Movie"
//           onChange={(e) => setLocalSearchTerm(e.currentTarget.value)}
//           value={localSearchTerm}
//         />
//       </Content>
//     </Wrapper>
//   );
// };

// SearchBar.propTypes = {
//   setSearchTerm: PropTypes.func,
// };

// export default SearchBar;

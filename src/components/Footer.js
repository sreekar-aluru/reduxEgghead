import React from "react";
import FilterLink from "./FIlterLink";
// import { connect } from "react-redux";

// import { setVisibilityFilter } from "../actions";

// const Link = ({ active, onLinkClick, children }) => {
//   if (active) {
//     return <span>{children}</span>;
//   }
//   return (
//     <button
//       type="button"
//       onClick={e => {
//         e.preventDefault();
//         onLinkClick();
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// const mapStateToLinkProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// });
// const mapDispatchToLinkProps = (dispatch, ownProps) => ({
//   onLinkClick() {
//     dispatch(setVisibilityFilter(ownProps.filter));
//   }
// });
// const FilterLink = connect(
//   mapStateToLinkProps,
//   mapDispatchToLinkProps
// )(Link);

const Footer = () => (
  <p>
    Show: <FilterLink filter="all"> All </FilterLink>{" "}
    <FilterLink filter="active"> Active</FilterLink>{" "}
    <FilterLink filter="completed"> Completed </FilterLink>
  </p>
);

export default Footer;

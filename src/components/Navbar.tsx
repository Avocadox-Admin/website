import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import BurguerIcon from '../images/burgerIcon.inline.svg';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 absolute top-0 w-full h-[100px] bg-black/70 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] items-center z-10">
      <div className="max-w-[148px] ml-4">
        <Link to="/">
          <StaticImage src="../images/avocadox-logo.png" alt="Avocadox Logo" />
        </Link>
      </div>
      <div className="flex justify-end mr-4">
        <BurguerIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

// useStaticQuery(graphql`
//   query {
//     backgrounds: allFile(filter: { sourceInstanceName: { eq: "backgrounds" } }) {
//       nodes {
//         relativePath
//         childImageSharp {
//           fluid(maxWidth: 4000, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `);

export default Navbar;

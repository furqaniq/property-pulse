import React from 'react'
import { fetchProperties } from '@/utils/requests'
import FeaturedPropertyCard from './FeaturedPropertyCard';

export const dynamic = 'force-dynamic';

const FeaturedProperties = async () => {
    const properties = await fetchProperties({
        showFeatured: true,
    });

    console.log(properties);

  return ( properties.length > 0 && (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          { properties.map((property) => (
            <FeaturedPropertyCard key={property._id} property={property} />
          )) }
        </div>
      </div>
    </section>
  ))
}

export default FeaturedProperties

// import React from 'react';
// import { fetchProperties } from '@/utils/requests';
// import FeaturedPropertyCard from './FeaturedPropertyCard';

// const FeaturedProperties = ({ properties = [] }) => { // Default to an empty array
//   return (
//     properties.length > 0 && (
//       <section className="bg-blue-50 px-4 pt-6 pb-10">
//         <div className="container-xl lg:container m-auto">
//           <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
//             Featured Properties
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {properties.map((property) => (
//               <FeaturedPropertyCard key={property._id} property={property} />
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   );
// };

// // Fetch properties at build time
// export async function getStaticProps() {
//   const properties = await fetchProperties({ showFeatured: true });

//   return {
//     props: {
//       properties: properties || [], // Ensure properties is an array
//     },
//     revalidate: 10, // Optional: Revalidate every 10 seconds
//   };
// }

// export default FeaturedProperties;
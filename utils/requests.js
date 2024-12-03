// const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// // Fetch all properties
// async function fetchProperties({ showFeatured = false } = {}) {
//     try {
//       // Handle the case where the domain is not available yet
//       if (!apiDomain) {
//          return [];
//       }

//       const res = await fetch(`${apiDomain}/properties${showFeatured ? '/featured' : ''}`, { cache: 'no-store' }); 
  
//       if (!res.ok) {
//         throw new Error('Failed to fetch data');
//       }
      
//       return res.json();
//     } catch (error) {
//       console.log(error);
//       return [];
//     }
//   };

//   // Fetch single property
//   async function fetchProperty(id) {
//     try {
//       // Handle the case where the domain is not available yet
//       if (!apiDomain) {
//          return null;
//       }

//       const res = await fetch(`${apiDomain}/properties/${id}`, { cache:'no-store' }); 
  
//       if (!res.ok) {
//         throw new Error('Failed to fetch data');
//       }
      
//       return res.json();
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   };


//   export { fetchProperties, fetchProperty };

// utils/request.js
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

async function fetchProperties({ showFeatured = false } = {}) {
    try {
        if (!apiDomain) {
            console.error("API domain is not set");
            return []; // Return an empty array if the API domain is not set
        }

        const res = await fetch(`${apiDomain}/properties${showFeatured ? '/featured' : ''}`, { cache: 'default' });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        
        return await res.json(); // Await the response to ensure we get the JSON data
    } catch (error) {
        console.error(error);
        return []; // Return an empty array on error
    }
}

async function fetchProperty(id) {
    try {
        if (!apiDomain) {
            console.error("API domain is not set");
            return null; // Return null if the API domain is not set
        }

        const res = await fetch(`${apiDomain}/properties/${id}`, { cache: 'default' });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        
        return await res.json(); // Await the response to ensure we get the JSON data
    } catch (error) {
        console.error(error);
        return null; // Return null on error
    }
}

export { fetchProperties, fetchProperty };
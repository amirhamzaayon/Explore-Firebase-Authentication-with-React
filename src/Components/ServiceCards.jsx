import { useEffect, useState } from "react";
import { ServiceCard } from "./ServiceCard";

export const ServiceCards = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("https://insight-hub-server.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);
  // console.log(services);

  //-------------------------------------------------------------

  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch services based on search and filter
  const fetchServices = () => {
    const query = new URLSearchParams({
      serviceTitle: searchTerm,
      category: selectedCategory === "All" ? "" : selectedCategory,
    }).toString();

    fetch(`https://insight-hub-server.vercel.app/search?${query}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.error("Error fetching services:", error));
  };

  // Fetch unique categories for filter dropdown
  const fetchCategories = () => {
    fetch("https://insight-hub-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  };

  useEffect(() => {
    fetchServices(); // Fetch services initially and whenever filters change
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-center">
        Find Your Service Partner
      </h2>

      {/* <div className="grid grid-cols-1 gap-6 ">
        {services.length === 0 ? (
          <p>Loading services...</p>
        ) : (
          services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        )}
      </div> */}
      <div className="grid grid-cols-1 gap-6 ">
        <ServiceCard></ServiceCard>
      </div>
    </div>
    //-----------------------------------------------------------------
    // <div className="p-6 text-white bg-black">
    //   <h1 className="mb-6 text-2xl font-bold text-center">Services</h1>

    //   {/* Search Input */}
    //   <div className="flex justify-center mb-4">
    //     <input
    //       type="text"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //       placeholder="Search by Service Title"
    //       className="w-2/3 p-2 text-black border border-white rounded-lg"
    //     />
    //   </div>

    //   {/* Category Filter Dropdown */}
    //   <div className="flex justify-center mb-6">
    //     <select
    //       value={selectedCategory}
    //       onChange={(e) => setSelectedCategory(e.target.value)}
    //       className="w-2/3 p-2 text-black border border-white rounded-lg"
    //     >
    //       <option value="">All Categories</option>
    //       {categories.map((category, index) => (
    //         <option key={index} value={category}>
    //           {category}
    //         </option>
    //       ))}
    //     </select>
    //   </div>

    //   {/* Service Cards */}
    //   <div className="grid grid-cols-1 gap-6">
    //     {services.length === 0 ? (
    //       <p>Loading services...</p>
    //     ) : (
    //       services.map((service) => (
    //         <ServiceCard key={service._id} service={service}></ServiceCard>
    //       ))
    //     )}
    //   </div>
    // </div>
  );
};

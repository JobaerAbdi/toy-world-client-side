import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Toys = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container mx-auto">
      <Tabs>
        <TabList>
          {categories.map((category, index) => (
            <Tab key={index}>{category.CategoryName}</Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-2 gap-4">
              {category.toys.map((toy, subIndex) => (
                <div key={subIndex} className="bg-white p-4 shadow-md">
                  <div className="bg-white rounded-lg  overflow-hidden">
                    <div className="lg:flex">
                      {/* Image side */}
                      <div className="lg:w-1/2">
                        <figure>
                          <img
                            src={toy.picture}
                            alt={toy.name}
                            className=" w-5/2 h-1/2 mb-2 "
                          />
                        </figure>
                      </div>

                      {/* Text side */}
                      <div className="lg:w-1/2 p-6">
                        <div className="card-body">
                          <h3 className="text-lg font-bold">{toy.name}</h3>
                          <div className=" items-center mb-2">
                            <span className="text-yellow-500 ">
                              {toy.rating} <i className="fas fa-star"></i>
                            </span>
                            <span className="text-gray-600">
                              ({toy.rating})
                            </span>
                          </div>

                          <p className="text-gray-600 ">${toy.price}</p>

                          <button className="bg-indigo-500 btn-sm text-white rounded">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Toys;







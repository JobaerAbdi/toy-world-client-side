import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const Toys = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="mx-auto mb-12 lg:px-14">
      <Tabs>
        <TabList>
          {cars.map((car, index) => (
            <Tab key={index}>{car.CategoryName}</Tab>
          ))}
        </TabList>

        {cars.map((car, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-2 gap-4">
              {car.toys.map((toy, subIndex) => (
                <div key={subIndex} className="bg-white p-4 shadow-md">
                  <div className="bg-white rounded-lg  overflow-hidden">
                    <div className="lg:flex">
                      <div className="lg:w-1/2">
                        <figure>
                          <img
                            src={toy.picture}
                            alt={toy.name}
                            className=" w-5/2 h-1/2 mb-2 "
                          />
                        </figure>
                      </div>

                      <div className="lg:w-1/2 p-6">
                        <div className="card-body">
                          <h3 className="text-lg font-bold">{toy.name}</h3>
                          <div className=" items-center mb-2">
                            <span className="text-lime-700">
                              {toy.rating} <i className="fas fa-star"></i>
                            </span>
                            <span className="text-black">
                              ({toy.rating})
                            </span>
                          </div>
                          <p className="text-gray-950 ">${toy.price}</p>
                          <Link to={`/singleToy/${car._id}`}>
                              <button className="bg-black btn-sm text-white rounded">View Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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







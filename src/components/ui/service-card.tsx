"use client";
import React, { useEffect, useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import "@/app/page.css";
import "@/app/service.css";
// import servicesData from "@/../services-data.json";

const ServiceCard = () => {
  const [servicesData, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/services");

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const data = await response.json();
      console.log("🚀 ~ fetchServices ~ data:", data);
      setServices(data?.services);
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des services :", error);
      return null;
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      <div className="w-full max-w-6xl mx-auto my-10 p-4">
        {servicesData.map((service, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            {/* <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {category.name}
            </h3> */}
            <div className="space-y-6">
              {/* {category.services.map((service, serviceIndex) => ( */}
              <div
                key={categoryIndex}
                className="border-b border-gray-200 pb-6"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
                  <span className="text-md">{service.name}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="font-semibold">{service.price}</span>
                    <span className="text-sm text-gray-500">
                      ({service.duration})
                    </span>
                    <a
                      href="https://widget.treatwell.fr/salon/shay-beauty-2/?utm_source=partner&amp;amp;utm_medium=salon-site-embedded-book-now-widget"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-or px-4 py-2 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
                    >
                      RÉSERVER
                    </a>
                  </div>
                </div>
                {/* <span className="text-sm">{service.description}</span> */}
              </div>
              {/* ))} */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceCard;

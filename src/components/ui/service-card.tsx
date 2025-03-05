"use client";
import React, { useEffect, useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import "@/app/page.css";
import "@/app/service.css";
// import servicesData from "@/../services-data.json";

type Service = {
  category: string;
  name: string;
  duration: string;
  price: string;
  description: string;
};

const ServiceCard = () => {
  const [servicesData, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/services");

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const data = await response.json();
      console.log("🚀 ~ fetchServices ~ data:", data);
      setServices(data?.services);
      setLoading(false);
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des services :", error);
      setLoading(false);
      return null;
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex flex-col justify-center items-center h-40">
      <span className="text-md text-center mb-5">Chargement ...</span>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-or"></div>
    </div>
  );

  return (
    <>
      <div className="w-full max-w-6xl mx-auto my-10 p-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          servicesData.map((service: Service, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <div className="space-y-6">
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
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ServiceCard;

import React from "react";
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import "@/app/page.css";
import "@/app/service.css";
import servicesData from "@/../services-data.json";

const ServiceCard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 p-4">
      {servicesData.categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">{category.name}</h3>
          <div className="space-y-6">
            {category.services.map((service, serviceIndex) => (
              <div key={serviceIndex} className="border-b border-gray-200 pb-6">
                {service.variants ? (
                  <div>
                    <h4 className="text-lg font-medium mb-2">{service.name}</h4>
                    <div className="space-y-4">
                      {service.variants.map((variant, variantIndex) => (
                        <div
                          key={variantIndex}
                          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                        >
                          <span className="text-md">{variant.name}</span>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <span className="font-semibold">
                              {variant.price.toFixed(2)}€
                            </span>
                            <span className="text-sm text-gray-500">
                              ({variant.duration})
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
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
                    <span className="text-md">{service.name}</span>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="font-semibold">
                        {service.price.toFixed(2)}€
                      </span>
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
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;

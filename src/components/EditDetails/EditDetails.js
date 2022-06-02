import React from "react";

const EditDetails = () => {
  return (
    
      <div className="max-w-md m-auto">
        <div className="border-b-[1px] border-solid border-red-900 pb-2 mb-4">
          <h1 className="font-medium text-lg text-slate-900">
            Edit Delivery Details
          </h1>
        </div>
        <div className="px-5 flex flex-col gap-4">
          <p>Delivery to Door</p>
          <input
            className="py-2 px-3"
            type="text"
            name="address"
            id="address"
            placeholder="Address"
          />
          <input
            className="py-2 px-3"
            type="text"
            name="home"
            id="home"
            placeholder="Flat, suite or floor"
          />
          <input
            className="py-2 px-3"
            type="text"
            name="businesstype"
            id="business"
            placeholder="Business type"
          />
          <input
            className="py-2 px-3"
            type="text"
            name="details"
            id="details"
            placeholder="Add delivery details"
          />
        </div>
        <div className="mt-5">
          <button className="bg-red-900 py-2 rounded text-gray-50 text-center w-full">
            Save and Continue
          </button>
        </div>
      </div>
  );
};

export default EditDetails;

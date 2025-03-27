import React from 'react'
import Picture from "@/components/card/picture";
import AddPicture from "@/components/card/addpicture";

const Listing = () => {
  return (
    <div className="flex justify-center mt-8">
      <div>
        <p className="mb-10"><Picture /></p>
        <p className="mb-10"><Picture /></p>
        <p className="mb-10"><Picture /></p>
        <p className="mb-10"><Picture /></p>
        <p className="mb-10"><Picture /></p>
        <p className="mb-10"><AddPicture /></p>
        

      </div>
    </div>
  )
}

export default Listing

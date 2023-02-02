import React from "react";

const DetailsModal = ({ details }) => {
  // console.log(details);
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="blog-modal" className="modal-toggle" />
      <label htmlFor="blog-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{details?.title}</h3>
          <p className="py-4">{details?.body}</p>
        </label>
      </label>
    </>
  );
};

export default DetailsModal;

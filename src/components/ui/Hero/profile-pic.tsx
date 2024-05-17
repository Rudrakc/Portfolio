import React from "react";
import pic from "@/assets/dp.jpg";

type Props = {};

const ProfilePic = (props: Props) => {
  return (
    <div className="z-10 my-8  mx-20 bg-transparent">
      <img
        src={pic}
        style={{ width: 300, height: 300, borderRadius: 300 / 2 , }}
      ></img>
    </div>
  );
};

export default ProfilePic;

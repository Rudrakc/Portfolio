import pic from "@/assets/dp.jpg";


const ProfilePic = () => {
  return (
    <div className="z-10 my-8  mx-20 bg-transparent">
      <img
        src={pic}
        className="w-60 h-60 md:w-[300px] md:h-[300px] rounded-full"
      ></img>
    </div>
  );
};

export default ProfilePic;

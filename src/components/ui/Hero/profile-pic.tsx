import pic from "@/assets/dp.jpg";


const ProfilePic = () => {
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

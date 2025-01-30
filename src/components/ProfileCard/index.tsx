const ProfileCard = ({ profile }: {
    profile: {
        name: string;
        designation: string;
        sem: string;
        img: string;
    }
}) => {
    return (
        <>
            <div className="w-[30%] max-sm:w-full flex justify-center items-center bg-white rounded-[10px] flex-col">
                <div className="w-[80%] max-sm:h-[15rem] flex justify-center items-center my-[1rem] mt-[2.2rem] h-[20rem] overflow-hidden rounded-[10px]">
                    <img className="w-[100%] h-[100%] object-cover" src={profile.img} alt={profile.name} />
                </div>
                <div className="w-[100%] pl-[10%] pb-[1rem]">
                    <p><strong>{profile.name}</strong></p>
                    <p>{profile.designation}</p>
                    <p>{profile.sem}</p>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;
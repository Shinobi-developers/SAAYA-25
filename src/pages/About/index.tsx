import ProfileCard from "../../components/ProfileCard";

const About = () => {

  const profileData = [
    {
      name: "Stan Lee",
      designation: "President",
      sem: "S6 CSE",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Nick Fury",
      designation: "Vice President",
      sem: "S6 CSE",
      img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Steve Roggers",
      designation: "Secretary",
      sem: "S6 CSE",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Steve Roggers",
      designation: "Secretary",
      sem: "S6 CSE",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">About the Art Fest</h1>
      <p className="mt-4">This is our college’s annual art festival showcasing student talent in various forms of art.</p>

      <div className="w-[100%] flex flex-wrap bg-[rgba(0,0,0,0.5)] p-[1rem] justify-evenly gap-[1rem]">
        {
          profileData ?
            profileData.map(profile => (
              <ProfileCard key={profile.name} profile={profile} />
            ))
            :
            "Loading...."
        }

      </div>
    </div>
  );
};

export default About;

import Header from "../components/fragments/Header";
import Button from "../components/elements/button";

const ProfilePage = () => {
  const handleOut = () => {
    localStorage.clear();

    location.replace("/");
  };

  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <>
      <Header title="Profile" description={email} />
      <main className="flex justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-slate-950 h-26 w-26 rounded-full">
            <h1 className="text-4xl font-bold text-white text-center leading-26">
              {name[0]}
            </h1>
          </div>
          <h2 className="text-lg font-bold text-slate-950 mt-3">{name}</h2>
          <p className="text-base font-normal text-slate-800">{`@${username}`}</p>
          <Button
            onClick={() => handleOut()}
            variant="bg-red-600"
            width="w-44"
            className="mt-5"
          >
            Keluar
          </Button>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;

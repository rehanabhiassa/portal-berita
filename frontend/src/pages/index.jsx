import Button from "../components/elements/button";

const Index = () => {
  return (
    <>
      <main className="h-screen flex justify-center items-center p-7">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-950">Portal Berita</h1>
          <p className="text-base font-normal text-slate-800">
            Lihat berita secara realtime.
          </p>
          <div className="flex flex-col">
            <a href="/signin">
              <Button width="w-44" className="mb-5 mt-5">
                Masuk
              </Button>
            </a>
            <a href="/signup">
              <Button width="w-44">Daftar</Button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;

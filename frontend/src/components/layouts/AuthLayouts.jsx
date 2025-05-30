const AuthLayouts = (props) => {
  const { type, title, description, children } = props;

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-slate-950">{title}</h1>
        <p className="text-base font-normal text-slate-800">{description}</p>
        <div className="flex flex-col gap-5 mt-5">{children}</div>
        {type == "signup" ? (
          <p className="text-sm font-normal text-slate-800 mt-2">
            Sudah punya akun?{" "}
            <a href="/signin" className="font-semibold">
              Masuk
            </a>
          </p>
        ) : (
          <p className="text-sm font-normal text-slate-800 mt-5">
            Belum punya akun?{" "}
            <a href="/signup" className="font-semibold">
              Daftar
            </a>
          </p>
        )}
      </div>
    </>
  );
};

export default AuthLayouts;

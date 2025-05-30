import AuthLayouts from "../components/layouts/AuthLayouts";
import SigninForm from "../components/fragments/SigninForm";

const SigninPage = () => {
  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <AuthLayouts
          type="signin"
          title="Selamat Datang!"
          description="Masuk ke akun Portal Berita."
        >
          <SigninForm />
        </AuthLayouts>
      </main>
    </>
  );
};

export default SigninPage;

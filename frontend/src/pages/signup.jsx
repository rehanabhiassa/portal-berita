import AuthLayouts from "../components/layouts/AuthLayouts";
import SignupForm from "../components/fragments/SignupForm";

const SignupPage = () => {
  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <AuthLayouts
          type="signup"
          title="Selamat Datang!"
          description="Buat akun Portal Berita."
        >
          <SignupForm />
        </AuthLayouts>
      </main>
    </>
  );
};

export default SignupPage;

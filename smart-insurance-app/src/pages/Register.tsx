import Loader from '@/components/Loader';
import  { lazy, Suspense } from 'react';

// Dynamically import RegisterContainer
const RegisterContainer = lazy(() => import("../containers/register/register-container"));

const Register = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <RegisterContainer />
    </Suspense>
  );
};

export default Register;
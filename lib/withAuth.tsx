import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { userPool } from './cognito';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const user = userPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (session && session.isValid()) {
            setIsAuthenticated(true);
            setLoading(false);
            router.push('/sign-in');
          } else {
            router.push('/sign-in');
          }
        });
      } else {
        router.push('/sign-in');
      }
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

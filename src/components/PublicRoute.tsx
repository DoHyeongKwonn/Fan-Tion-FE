import { Navigate } from 'react-router-dom';
//추후 api 연결시, 이부분 서버로부터 로그인 상태를 확인하도록 수정할 예정
const user = {
  isLoggedIn: true,
};

interface PublicRouteProps {
  children: React.ReactNode;
}

export default function PublicRoute({ children }: PublicRouteProps) {
  //api 를 통해 로그인 상태를 확인하도록 수정할 부분
  if (user.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}

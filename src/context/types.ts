export interface LoginDto {
  email: string;
  password: string;
}

export interface SignupDto {
  name: string;
  email: string;
  password: string;
}

export interface UserDataType {
  id: string;
  name: string;
  email: string;
}

export interface AuthValuesType {
  user: UserDataType | null;
  loading: boolean;
  setUser: (user: UserDataType | null) => void;
  setLoading: (loading: boolean) => void;
  login: {
    mutate: (data: LoginDto) => void;
    isLoading: boolean;
  };
  register: {
    mutate: (data: SignupDto) => void;
    isLoading: boolean;
  };
  logout: {
    mutate: () => void;
    isLoading: boolean;
  };
}

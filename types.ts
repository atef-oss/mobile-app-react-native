export type Theme = 'light' | 'dark';

export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string; // Optional URL to the user's profile picture
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  imageUrl?: string; // Optional URL to an image associated with the post
  likes: number;
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User; // populated user data, not always present
}

export interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  logout: () => void;
}

export interface NavigationProps {
  navigation: any; // Replace 'any' with a more specific type if possible (e.g., StackNavigationProp)
  route: any; // Replace 'any' with a more specific type if possible (e.g., RouteProp)
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
//LAYOUT INCLUDE TYPES

export interface RandomUsers {
  id: string;
  name: string;
  image: string;
}
export interface PostPageTypes {
  params: { userId: string; postId: string };
}
export interface CropperDimensions {
  height?: number | null;
  width?: number | null;
  left?: number | null;
  top?: number | null;
}
export interface ShowErrorObject {
  type: string;
  message: string;
}
export interface Like {
  id: string;
  user_id: string;
  post_id: string;
}
export interface Post {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
}
export interface Comment {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  created_at: string;
}
export interface PostWithProfile {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
}
export interface UploadError {
  type: string;
  message: string;
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// COMPONENT TYPES
export interface CommentsHeaderCompTypes {
  params: { userId: string; postId: string };
  post: PostWithProfile;
}

export interface PostMainCompTypes {
  post: PostWithProfile;
}

export interface PostMainLikesCompTypes {
  post: PostWithProfile;
}

export interface ProfilePagesTypes {
  params: { id: string };
}
export interface PostUserCompTypes {
  post: Post;
}

// LAYOUT INCLUDE TYPES

export interface MenuItemsTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface MenuItemFollowComptypes {
  user: RandomUsers;
}

export interface TextInputCompTypes {
  string: string;
  placeholder: string;
  onUpdate: (newValue: string) => void;
  inputType: string;
  error: string;
}

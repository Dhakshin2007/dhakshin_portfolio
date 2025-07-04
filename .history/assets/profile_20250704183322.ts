import Me from './Me.jpg';
// This is a base64 representation of the user's profile image.
export const profileImage = Me;

declare module '.jpg' {
  const value: string;
  export default value;
}
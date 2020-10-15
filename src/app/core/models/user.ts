export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface User {
  uid: string;
  email: string;
  displayName?: string | null | undefined;
  emailVerified: boolean;
  password?: string;
  lastName?: string;
  firstName?: string;
  photoURL?: string;
  role?: Roles;
}

import bcrypt from 'bcryptjs';

/**
 * Hash password dengan salt rounds 10
 * @param password - Plain text password
 * @returns Promise<string> - Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Verify password
 * @param password - Plain text password
 * @param hash - Hashed password
 * @returns Promise<boolean> - True if password matches
 */
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

import { decodeToken } from 'react-jwt';
import { postRefreshToken } from './api/api';
import { TokenDecoded } from './types';

class HandleToken {
  token: string;
  tokenDurationMs: number;
  refreshToken: string;
  refreshTokenDurationMs: number;
  constructor(
    token: string,
    tokenDurationMs: number,
    refreshToken: string,
    refreshTokenDurationMs: number
  ) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.tokenDurationMs = tokenDurationMs;
    this.refreshTokenDurationMs = refreshTokenDurationMs;
  }
  autoRefresh() {
    setTimeout(() => {
      postRefreshToken(this.refreshToken);
    }, this.tokenDurationMs);
  }
}

export const checkExiredToken = (token: string) => {
  const myDecodedToken = decodeToken<TokenDecoded>(token);
  if (myDecodedToken) {
    const timeRemain = myDecodedToken.exp - myDecodedToken.iat;
    if (timeRemain > 5000) {
      return false;
    }
  }
  return true;
};

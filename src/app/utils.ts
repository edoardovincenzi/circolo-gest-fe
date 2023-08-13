import { postRefreshToken } from './api/api';

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

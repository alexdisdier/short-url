export interface Urls {
  _id: string;
  original: string;
  short: string;
  visits: number;
}

// export enum KeyUsage {
//   SIGN = 'SIGN',
//   ENCRYPT = 'ENCRYPT'
// }

// export enum CodeChallengeMethod {
//   S256 = 'S256',
//   plain = 'plain'
// }

// export enum TokenType {
//   token = "token",
//   authCode = "authCode"
// }

// export enum ResponseType {
//   none = "none",
//   code = "code"
// }

// export interface OAuthPayload {
//   responseType: ResponseType;
//   clientId: number;
//   redirectUri: string;
//   codeChallenge?: string;
//   codeChallengeMethod?: CodeChallengeMethod;
// }

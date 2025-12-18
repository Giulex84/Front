export const PiMock = {
  authenticate: async () => {
    return {
      uid: "mock_uid",
      username: "mock_user",
      accessToken: "mock_token",
    };
  },
};

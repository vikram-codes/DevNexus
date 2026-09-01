const ROUTES = {
  SIGN_UP: "/sign-up",
  SIGN_IN: "/sign-in",
  HOME: "/",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;

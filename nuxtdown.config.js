module.exports = {
  api: function (isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    [
      "home", {
        page: "/home/home",
        permalink: "/:slug",
        isPost: false
      },
      "pages",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ]
  ]
};

import Mock from "../data/mock";

const database = {

  portfolios: [
    {
      id: 1,
      title: "javascript-blog",
      subtitle: "Simple JavaScript App.",
      imageUrl: "./images/p1/portfolio-thumb.png",
      largeImageUrl: [
        "./images/p1/1.png",
        "./images/p1/2.png",
      ],
      url: 'https://edyta2801.github.io/javascript-blog/'
    },
    {
      id: 2,
      title: "testYourself App",
      subtitle: "Application for creating and editing educational tests",
      imageUrl: "./images/p2/portfolio-thumb.png",
      largeImageUrl: [
        "./images/p2/1.png",
        "./images/p2/2.png",
        "./images/p2/3.png",
        "./images/p2/4.png",
        "./images/p2/5.png",
        "./images/p2/6.png",
        "./images/p2/7.png",
        "./images/p2/8.png",
      ],
      url: 'http://app.testyourself.jfddl6.is-academy.pl/'
    },
  ],
};




Mock.onGet("/api/portfolios").reply(() => {
  const response = database.portfolios;
  return [200, response];
});


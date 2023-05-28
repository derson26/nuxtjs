import {IJob} from "../../types/job";

export default defineEventHandler( async () => {
  const jobs: IJob[] = [
    { id: "1", location: "London", salary: "3900", title: "farm worker" },
    { id: "2", location: "Manchester", salary: "4000", title: "quarryman" },
    { id: "3", location: "Norwich", salary: "3800", title: "prison guard" },
    {
      id: "4",
      location: "Lisbon",
      salary: "3500",
      title: "front end developer",
    },
  ];

  return {
    jobs,
  };
});

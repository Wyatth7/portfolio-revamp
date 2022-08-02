import { Octokit } from "@octokit/core";
import { Request, Response, NextFunction } from "express";
import sendRes from "../utils/errHandler";

export const gitHubData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const octokit = new Octokit();
    const data = await octokit.request("GET /users/{username}/repos", {
      mediaType: {
        previews: ["mercy"],
      },
      username: "Wyatth7",
    });

    if (!data) {
      sendRes(res, 400, "Could not get user repositories");
    }

    const getType = (topics: string[] | undefined) => {
      if (topics?.includes("node")) {
        return "Full Stack";
      } else if (
        topics?.includes("react") ||
        topics?.includes("angular") ||
        topics?.includes("vue") ||
        topics?.includes("next")
      ) {
        return "Front End";
      } else if (topics?.includes("npm")) {
        return "NPM";
      } else {
        return "Other";
      }
    };

    const filteredData = data.data
      .map((el) => {
        if (el.name === "Wyatth7") {
          return null;
        }

        return {
          title: el.name.replace(/[_-]/g, " "),
          description: el.description,
          topics: el.topics,
          type: getType(el.topics),
          homepage: el.homepage,
          url: el.svn_url,
        };
      })
      .filter((el) => el !== null);

    res.status(200).json({ data: filteredData });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "fail" });
  }
};

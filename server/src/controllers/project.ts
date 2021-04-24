import { Octokit } from "@octokit/core";
import { RequestHandler } from "express";
import sendRes from "../utils/errHandler";

export const gitHubData: RequestHandler = async (req, res, next) => {
  try {
    // const octokit = new Octokit({
    //   auth: "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",
    // });
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

    console.log(data.data);

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
          title: el.name,
          description: el.description,
          topics: el.topics,
          type: getType(el.topics),
          homepage: el.homepage,
          url: el.svn_url,
        };
      })
      .filter((el) => el !== null);

    res.status(200).json({ repos: filteredData });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "fail" });
  }
};

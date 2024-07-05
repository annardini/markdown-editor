import config from "@/config";
import { Octokit } from "@octokit/rest";
import type { Client } from "@/types/client";

class GitHubClient implements Client {
  private access_token: string;
  private owner: string;
  private repo: string;
  private client;

  constructor() {
    this.access_token = config?.github?.access_token;
    this.owner = config?.github?.owner;
    this.repo = config?.github?.repo;
    this.client = new Octokit({ auth: this.access_token });
  }

  async find(path: string) {
    return await this.client.repos.getContent({
      owner: this.owner,
      repo: this.repo,
      path,
    });
  }
}

export default new GitHubClient();

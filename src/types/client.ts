import { RestEndpointMethodTypes } from "@octokit/rest";

export interface Client {
  find<T extends any>(path: string): Promise<RestEndpointMethodTypes["repos"]["getContent"]["response"]>,
}

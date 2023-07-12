import { rest } from "msw";
import { baseUrl, productsEndpoint } from "../api/connectApi/apiEndpoints";
import { mockPhones } from "./phonesMocks";

export const handlers = [
  rest.get(`${baseUrl}${productsEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(200), res.json(mockPhones)),
  ),
];

export const errorHandlers = [
  rest.get(`${baseUrl}${productsEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(500)),
  ),
];

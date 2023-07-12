import { useQuery } from "@tanstack/react-query";
import { mockPhoneAcer } from "../../mocks/phonesMocks";
import useGetPhones from "./useGetPhones";

const mockedUsedQuery = useQuery;

jest.mock("@tanstack/react-query");

describe("Given the useGetPhones hook", () => {
  describe("When called", () => {
    test("Then it should return a list of phones in the data property", () => {
      const expectedPhoneAcerResponse = mockPhoneAcer;

      mockedUsedQuery.mockReturnValue({
        data: mockPhoneAcer,
        error: undefined,
        isError: false,
        isLoading: false,
      });

      const response = useGetPhones();

      expect(response.isLoading).toBe(false);
      expect(response.data).toStrictEqual(expectedPhoneAcerResponse);
    });
  });
});

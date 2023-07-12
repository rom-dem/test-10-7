import { mockPhoneAcer, mockPhoneAlcatel } from "../../mocks/phonesMocks";
import getPhones from "./getPhones";

describe("Given the getPhone function", () => {
  describe("When called", () => {
    test("Then it should return a list with phones in it", async () => {
      const expectedPhoneAlcatel = mockPhoneAlcatel;
      const expectedPhoneAcer = mockPhoneAcer;

      const response = await getPhones();

      expect(response).toContainEqual(expectedPhoneAlcatel);
      expect(response).toContainEqual(expectedPhoneAcer);
    });
  });
});

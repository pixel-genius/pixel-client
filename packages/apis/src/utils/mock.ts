import axios from "axios";

import { ApiResponse } from "../types/api.types";

interface GenerateMockResponseProps<T>
  extends Partial<Omit<ApiResponse<T>, "data">> {
  data: T;
}

const MOCK_HEADERS = new axios.AxiosHeaders();

const MOCK = {
  MOCK_HEADERS: MOCK_HEADERS,
  STATUS: 200,
  STATUS_TEXT: "OK",
  CONFIG: {
    headers: MOCK_HEADERS,
  },
};

export const generateMockResponse = <T>(
  props: GenerateMockResponseProps<T>,
): ApiResponse<T> => {
  const { data, ...resProps } = props;

  return {
    data,
    status: MOCK.STATUS,
    statusText: MOCK.STATUS_TEXT,
    headers: MOCK.MOCK_HEADERS,
    config: {
      headers: MOCK.MOCK_HEADERS,
    },
    ...resProps,
  };
};

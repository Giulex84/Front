import { PI_ENABLED } from "../config/pi";
import { PiMock } from "./piMock";

export const usePi = () => {
  const isPi = PI_ENABLED;

  const authenticate = async () => {
    if (isPi && (window as any).Pi?.authenticate) {
      return await (window as any).Pi.authenticate();
    }
    return await PiMock.authenticate();
  };

  return {
    isPi,
    authenticate,
  };
};

import { useEffect } from "react";
import { piService } from "../services/pi/piService";

export function useBootstrap() {
  useEffect(() => {
    piService.init();
  }, []);
}

import { IAppConfig } from "../types/appConfig.types";

class CommonUtils {

    isNonEmptyString(args: string) {
        return args !== '';
    }

}

export default CommonUtils;
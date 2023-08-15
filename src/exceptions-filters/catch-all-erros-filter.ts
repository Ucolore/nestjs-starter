import { ArgumentsHost, Catch } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch()
export class CatchAllErrorsFilter extends BaseExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void {
        //Write in log files
        //Send Erros to specific platform
        //...etc
        return super.catch(exception, host);
    }
}
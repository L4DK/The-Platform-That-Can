import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DigitalCustodianAgentService } from "./digitalCustodianAgent.service";
import { DigitalCustodianAgentControllerBase } from "./base/digitalCustodianAgent.controller.base";

@swagger.ApiTags("digitalCustodianAgents")
@common.Controller("digitalCustodianAgents")
export class DigitalCustodianAgentController extends DigitalCustodianAgentControllerBase {
  constructor(
    protected readonly service: DigitalCustodianAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

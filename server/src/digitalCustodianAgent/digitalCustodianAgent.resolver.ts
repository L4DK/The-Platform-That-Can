import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DigitalCustodianAgentResolverBase } from "./base/digitalCustodianAgent.resolver.base";
import { DigitalCustodianAgent } from "./base/DigitalCustodianAgent";
import { DigitalCustodianAgentService } from "./digitalCustodianAgent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DigitalCustodianAgent)
export class DigitalCustodianAgentResolver extends DigitalCustodianAgentResolverBase {
  constructor(
    protected readonly service: DigitalCustodianAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

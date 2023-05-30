import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AiGatekeeperAgentResolverBase } from "./base/aiGatekeeperAgent.resolver.base";
import { AiGatekeeperAgent } from "./base/AiGatekeeperAgent";
import { AiGatekeeperAgentService } from "./aiGatekeeperAgent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AiGatekeeperAgent)
export class AiGatekeeperAgentResolver extends AiGatekeeperAgentResolverBase {
  constructor(
    protected readonly service: AiGatekeeperAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

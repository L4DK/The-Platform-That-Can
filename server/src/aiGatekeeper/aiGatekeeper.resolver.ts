import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AiGatekeeperResolverBase } from "./base/aiGatekeeper.resolver.base";
import { AiGatekeeper } from "./base/AiGatekeeper";
import { AiGatekeeperService } from "./aiGatekeeper.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AiGatekeeper)
export class AiGatekeeperResolver extends AiGatekeeperResolverBase {
  constructor(
    protected readonly service: AiGatekeeperService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

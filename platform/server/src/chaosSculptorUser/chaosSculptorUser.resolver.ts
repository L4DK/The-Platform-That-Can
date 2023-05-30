import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChaosSculptorUserResolverBase } from "./base/chaosSculptorUser.resolver.base";
import { ChaosSculptorUser } from "./base/ChaosSculptorUser";
import { ChaosSculptorUserService } from "./chaosSculptorUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChaosSculptorUser)
export class ChaosSculptorUserResolver extends ChaosSculptorUserResolverBase {
  constructor(
    protected readonly service: ChaosSculptorUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

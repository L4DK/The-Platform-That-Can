import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IdeaCollaboratorUserResolverBase } from "./base/ideaCollaboratorUser.resolver.base";
import { IdeaCollaboratorUser } from "./base/IdeaCollaboratorUser";
import { IdeaCollaboratorUserService } from "./ideaCollaboratorUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IdeaCollaboratorUser)
export class IdeaCollaboratorUserResolver extends IdeaCollaboratorUserResolverBase {
  constructor(
    protected readonly service: IdeaCollaboratorUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

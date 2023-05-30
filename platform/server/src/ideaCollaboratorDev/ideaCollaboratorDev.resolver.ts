import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IdeaCollaboratorDevResolverBase } from "./base/ideaCollaboratorDev.resolver.base";
import { IdeaCollaboratorDev } from "./base/IdeaCollaboratorDev";
import { IdeaCollaboratorDevService } from "./ideaCollaboratorDev.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IdeaCollaboratorDev)
export class IdeaCollaboratorDevResolver extends IdeaCollaboratorDevResolverBase {
  constructor(
    protected readonly service: IdeaCollaboratorDevService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

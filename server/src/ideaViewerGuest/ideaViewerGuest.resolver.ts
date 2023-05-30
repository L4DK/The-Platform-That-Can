import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IdeaViewerGuestResolverBase } from "./base/ideaViewerGuest.resolver.base";
import { IdeaViewerGuest } from "./base/IdeaViewerGuest";
import { IdeaViewerGuestService } from "./ideaViewerGuest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IdeaViewerGuest)
export class IdeaViewerGuestResolver extends IdeaViewerGuestResolverBase {
  constructor(
    protected readonly service: IdeaViewerGuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
